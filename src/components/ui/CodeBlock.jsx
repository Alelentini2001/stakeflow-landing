import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Highlight code using Prism
  const highlighted = Prism.highlight(
    code,
    Prism.languages[language],
    language
  );

  return (
    <div className="relative">
      <pre className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>

      <button
        onClick={copyToClipboard}
        className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
      >
        <motion.div initial={false} animate={{ scale: copied ? 0.8 : 1 }}>
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </motion.div>
      </button>
    </div>
  );
}
