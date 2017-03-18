import hljs from 'highlight.js/lib/highlight.js';
import JS from 'highlight.js/lib/languages/javascript';
import XML from 'highlight.js/lib/languages/xml';
import CSS from 'highlight.js/lib/languages/css';

hljs.registerLanguage('javascript', JS);
hljs.registerLanguage('html', XML);
hljs.registerLanguage('css', CSS);

hljs.initHighlightingOnLoad();
