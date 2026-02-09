import React, { useState, useEffect } from 'react';

// Simple syntax highlighter for VS Code style
const highlightSyntax = (code) => {
  if (!code) return code;

  // Split by common delimiters but keep them, and strings
  // This regex splits by strings, or non-word characters
  const parts = code.split(/(".*?"|'.*?'|`.*?`|\b\d+\b|[(){}[\].,;:\s]+)/g).filter(Boolean);

  return parts.map((part, i) => {
    // Strings
    if (/^["'`]/.test(part)) {
      return <span key={i} className="text-[#ce9178]">{part}</span>; // Orange
    }
    // Keywords
    if (/^(import|from|const|let|var|while|if|else|return|function|class|export|default|await|async)$/.test(part)) {
      return <span key={i} className="text-[#c586c0]">{part}</span>; // Purple/Pink
    }
    // Numbers
    if (/^\d+$/.test(part)) {
      return <span key={i} className="text-[#b5cea8]">{part}</span>; // Light Green
    }
    // Boolean
    if (/^(true|false|null|undefined)$/.test(part)) {
      return <span key={i} className="text-[#569cd6]">{part}</span>; // Blue
    }
    // Functions (heuristic: often followed by (, but here we just check common ones or regex lookahead wasn't used)
    // We can't do lookahead easily with split. 
    // Let's just color specific known methods or capitalized words as classes?
    if (/^(console|log|code|innovate|load|fire|build|deploy|impact)$/.test(part)) {
      return <span key={i} className="text-[#dcdcaa]">{part}</span>; // Yellow
    }
    // Types/Classes (Capitalized)
    if (/^[A-Z][a-zA-Z0-9]*$/.test(part)) {
      return <span key={i} className="text-[#4ec9b0]">{part}</span>; // Teal
    }
    // Object keys (heuristic: ending with :) - hard to detect in split array individually without context

    // Default variable color (Light Blue) or Punctuation (White/Gray)
    if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(part)) {
      return <span key={i} className="text-[#9cdcfe]">{part}</span>; // Light Blue
    }

    // Punctuation/Operators
    return <span key={i} className="text-[#d4d4d4]">{part}</span>;
  });
};

const CodeTyping = ({
  lines,
  speed = 40,
  pauseAfter = 2000,
}) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // If lines array is empty or changes, reset
    if (!lines || lines.length === 0) return;

    // Pausing after completion before restart
    if (isPaused) {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        setIsPaused(false);
      }, pauseAfter);
      return () => clearTimeout(timeout);
    }

    // Check if we've completed all lines
    if (currentLineIndex >= lines.length) {
      setIsPaused(true);
      return;
    }

    const currentText = lines[currentLineIndex];

    // Typing effect
    if (currentCharIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Line finished
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, speed * 2); // Brief pause between lines
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex, isPaused, lines, speed, pauseAfter]);

  return (
    <div className="font-mono text-xs md:text-sm leading-relaxed w-full bg-[#1e1e1e] p-1 rounded-lg shadow-inner overflow-hidden relative">
      {/* Ghost copy for sizing - maintains fixed height based on content */}
      <div className="invisible pointer-events-none">
        {lines.map((line, index) => (
          <div key={index} className="flex min-h-[1.5em] mb-0.5">
            <span className="mr-4 w-6 text-right">{index + 1}</span>
            <span className="whitespace-pre flex-1">{line || ' '}</span>
          </div>
        ))}
      </div>

      {/* Actual animated content overlay */}
      <div className="absolute inset-0 p-1">
        {displayedLines.map((line, index) => (
          <div key={index} className="flex min-h-[1.5em] mb-0.5">
            <span className="text-[#858585] text-xs mr-4 select-none w-6 text-right">{index + 1}</span>
            <span className="whitespace-pre flex-1">{highlightSyntax(line)}</span>
          </div>
        ))}

        {currentLineIndex < lines.length && (
          <div className="flex min-h-[1.5em] mb-0.5">
            <span className="text-[#858585] text-xs mr-4 select-none w-6 text-right">{currentLineIndex + 1}</span>
            <span className="whitespace-pre flex-1">
              {highlightSyntax(lines[currentLineIndex].slice(0, currentCharIndex))}
              <span className="inline-block w-2 h-4 bg-[#d4d4d4] align-middle animate-pulse ml-0.5 relative top-[2px]" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeTyping;
