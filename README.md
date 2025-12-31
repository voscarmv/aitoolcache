# aitoolcache

Tool call memory cache for AI chatbots

## Why?

Sometimes you want to modularize tools for an interactive AI agent. The problem? There may be toolchains that pass large data like a Base64 image. You don't want your chatbot history to get bloated with this. The solution?

```typescript
import { aicache } from '@voscarmv/aitoolcache'

const key = aicache.set(LargeBase64data);

// ...pass just the key in the chatbot history...

const val = aicache.get(key);

// ...next tool has access without bloating chatbot history...
```