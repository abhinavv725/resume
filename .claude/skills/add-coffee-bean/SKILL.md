# Add Coffee Bean

Adds a new entry to `src/data/coffee-beans.json`.

## Flow

Ask the user: **"Got a URL for the bean, or want to fill in the details manually?"**

### If URL provided:
1. WebFetch the URL
2. Extract: product name, description (tasting notes / roast / origin — 1-2 sentences, casual not marketing), and the main product image URL (prefer CDN URLs from the site itself)
3. Show the extracted values to the user and ask for confirmation / any edits
4. Append to `coffee-beans.json`

### If manual:
Ask one by one:
1. Name?
2. Description? (tasting notes, roast level, origin — keep it short and honest)
3. Buy link?
4. Image URL? (direct image URL from the product site — paste from browser or leave blank)

## JSON entry format

```json
{
  "name": "...",
  "description": "...",
  "imageUrl": "https://...",   // external image URL — preferred
  "imageAsset": "/assets/img/coffee/filename.jpg",  // only if local file
  "link": "https://..."
}
```

**Image resolution:** `imageUrl` → `imageAsset` → ☕ placeholder. Always prefer `imageUrl`.

## After adding

Run `npm run build` to verify the build is clean, then confirm to the user.
