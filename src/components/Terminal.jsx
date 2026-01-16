import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  processCommand, 
  welcomeMessage, 
  availableCommands, 
  konamiCode, 
  konamiMessage 
} from './commands';
import '../styles/terminal.css';

// Typing animation component
const TypedOutput = ({ content, onComplete, speed = 8 }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (!content) {
      setIsComplete(true);
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        onComplete?.();
      }
      return;
    }

    let index = 0;
    setDisplayedContent('');
    setIsComplete(false);
    hasCompletedRef.current = false;

    const interval = setInterval(() => {
      if (index < content.length) {
        const chunkSize = Math.min(3, content.length - index);
        setDisplayedContent(content.substring(0, index + chunkSize));
        index += chunkSize;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        if (!hasCompletedRef.current) {
          hasCompletedRef.current = true;
          onComplete?.();
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [content, speed]); // Removed onComplete from dependencies

  return (
    <pre className="output">
      {displayedContent}
      {!isComplete && <span className="typing-cursor">▋</span>}
    </pre>
  );
};

// Matrix rain effect component
const MatrixRain = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = Math.min(800, window.innerWidth - 40);
    canvas.height = 300;

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF🏸';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    let frameCount = 0;
    const maxFrames = 150;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      frameCount++;
      if (frameCount < maxFrames) {
        requestAnimationFrame(draw);
      } else {
        onComplete?.();
      }
    };

    draw();
  }, [onComplete]);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
};

// Main Terminal component
const Terminal = ({ onModeSwitch }) => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentDir, setCurrentDir] = useState('~');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [konamiProgress, setKonamiProgress] = useState([]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Initialize with welcome message
  useEffect(() => {
    setHistory([{ type: 'output', content: welcomeMessage, instant: true }]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, showMatrix]);

  // Focus input when not typing
  useEffect(() => {
    if (!isTyping) {
      inputRef.current?.focus();
    }
  }, [isTyping]);

  // Konami code detection
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.code;
      const newProgress = [...konamiProgress, key];

      if (konamiCode[konamiProgress.length] === key) {
        setKonamiProgress(newProgress);

        if (newProgress.length === konamiCode.length) {
          setHistory(prev => [...prev, {
            type: 'output',
            content: konamiMessage,
            instant: true
          }]);
          setKonamiProgress([]);
        }
      } else {
        setKonamiProgress([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiProgress]);

  const handleCommand = useCallback((cmd) => {
    const result = processCommand(
      cmd, 
      currentDir, 
      setCurrentDir, 
      onModeSwitch, 
      commandHistory
    );

    if (result?.clear) {
      setHistory([]);
      return;
    }

    if (result?.matrix) {
      setHistory(prev => [
        ...prev,
        { type: 'input', content: cmd, dir: currentDir },
        { type: 'output', content: result.content, instant: true }
      ]);
      setShowMatrix(true);
      return;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', content: cmd, dir: currentDir },
      ...(result !== null && result.content ? [{ 
        type: 'output', 
        content: result.content, 
        instant: result.instant 
      }] : [])
    ]);

    if (!result?.instant && result?.content) {
      setIsTyping(true);
    }
  }, [currentDir, onModeSwitch, commandHistory]);

  const handleKeyDown = (e) => {
    if (isTyping) return;

    if (e.key === 'Enter') {
      handleCommand(currentInput);

      if (currentInput.trim()) {
        setCommandHistory(prev => [...prev, currentInput]);
      }
      setCurrentInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = availableCommands.find(c => c.startsWith(currentInput.toLowerCase()));
      if (match) setCurrentInput(match);
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault();
      setHistory(prev => [
        ...prev,
        { type: 'input', content: currentInput + '^C', dir: currentDir }
      ]);
      setCurrentInput('');
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const focusInput = () => {
    if (!isTyping) inputRef.current?.focus();
  };

  const handleTypingComplete = () => {
    setIsTyping(false);
  };

  return (
    <div className="terminal-container" onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn close"></span>
          <span className="terminal-btn minimize"></span>
          <span className="terminal-btn maximize"></span>
        </div>
        <span className="terminal-title">mandar@portfolio: {currentDir}</span>
        <button
          className="mode-switch-btn"
          onClick={(e) => { e.stopPropagation(); onModeSwitch(); }}
        >
          GUI Mode →
        </button>
      </div>

      <div className="terminal-body" ref={terminalRef}>
        {history.map((item, i) => (
          <div key={i} className={`terminal-line ${item.type}`}>
            {item.type === 'input' ? (
              <>
                <span className="prompt">
                  <span className="prompt-user">mandar</span>
                  <span className="prompt-at">@</span>
                  <span className="prompt-host">portfolio</span>
                  <span className="prompt-colon">:</span>
                  <span className="prompt-dir">{item.dir}</span>
                  <span className="prompt-symbol">$</span>
                </span>
                <span className="command">{item.content}</span>
              </>
            ) : item.instant ? (
              <pre className="output">{item.content}</pre>
            ) : (
              <TypedOutput
                content={item.content}
                onComplete={i === history.length - 1 ? handleTypingComplete : undefined}
                speed={8}
              />
            )}
          </div>
        ))}

        {showMatrix && (
          <MatrixRain onComplete={() => setShowMatrix(false)} />
        )}

        {!isTyping && (
          <div className="terminal-line input-line">
            <span className="prompt">
              <span className="prompt-user">mandar</span>
              <span className="prompt-at">@</span>
              <span className="prompt-host">portfolio</span>
              <span className="prompt-colon">:</span>
              <span className="prompt-dir">{currentDir}</span>
              <span className="prompt-symbol">$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              spellCheck={false}
              autoComplete="off"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
