# Phase 1 Testing Guide — Local Verification

**Objective**: Verify CSP header, accessibility enhancements, and focus management work correctly in your browser.

**Time Required**: ~15-20 minutes  
**Tools Needed**: Browser (Chrome/Firefox/Safari), Screen reader (optional but recommended)

---

## Quick Start

### 1. Start Local Server
Open terminal in your project directory and run:

```bash
# Option A: Python (built-in)
python -m http.server 8000

# Option B: Node (if installed)
npx serve .

# Option C: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit: **http://localhost:8000**

---

## Test 1: CSP Header Validation ✅

### What to Check
The Content Security Policy header should load without errors.

### Steps
1. Open your local site in Chrome or Firefox
2. Open **DevTools** (F12 or Cmd+Option+I)
3. Go to **Console** tab
4. Look for any red CSP errors (there should be none)

### Expected Result
- ✅ No error messages containing "Content-Security-Policy"
- ✅ No warnings about blocked resources
- ✅ Page loads normally with all styles, fonts, and images visible

### What It Means
The CSP header is correctly whitelisting all resources the site needs. Your site is protected against XSS attacks while functioning normally.

---

## Test 2: Portfolio Filter Buttons — ARIA States 🎤

### What to Check
Filter buttons announce their pressed/unpressed state to screen readers.

### Steps (Visual Test)
1. Open DevTools Inspector (F12)
2. Click the "Design Build" filter button
3. Right-click the button → Inspect
4. In the Inspector, you should see:
   ```html
   <button class="filter-btn active" ... aria-pressed="true">Design Build</button>
   ```
5. Click "Residential" filter
6. Re-inspect → should now show `aria-pressed="true"` on Residential, `aria-pressed="false"` on others

### Expected Result
✅ Active button has `aria-pressed="true"`  
✅ Inactive buttons have `aria-pressed="false"`  
✅ State updates when you click filters  
✅ Portfolio cards update to show only matching projects

### Steps (Screen Reader Test — Recommended)
If you have a screen reader available:

**macOS (VoiceOver)**:
1. Enable VoiceOver: Cmd + F5
2. Click "Design Build" filter
3. Listen for announcement: "Design Build, pressed" (or similar)
4. Click "Residential" filter
5. Listen for: "Residential, pressed" and "Design Build, unpressed"

**Windows (NVDA)**:
1. Download/install NVDA if not installed
2. Start NVDA
3. Click "Design Build" filter
4. Listen for: "Design Build pressed"
5. Click another filter
6. Verify state changes announced

### What It Means
Visually impaired users now know which filter is active without relying on color alone.

---

## Test 3: Form Validation — Error Messages 📝

### What to Check
Form shows both visual AND accessible error messages.

### Steps
1. Scroll to "Project Discovery" form section
2. Leave the Name field empty
3. Leave the Email field empty
4. Click **"Request Discovery Call →"** button
5. Observe:
   - Red border appears on Name field ✅
   - Red border appears on Email field ✅
   - Error message appears below Name: "Please enter your name" ✅
   - Error message appears below Email: "Please enter a valid email address" ✅

### Expected Result
✅ Both fields have red borders  
✅ Error text messages are visible below fields  
✅ Text color is red (#d44)  

### Visual Test in Inspector
1. Right-click Name field → Inspect
2. You should see:
   ```html
   <input ... aria-required="true" aria-describedby="disc-name-error" aria-invalid="true" />
   <span id="disc-name-error" role="alert" style="display:block;">Please enter your name</span>
   ```

### Screen Reader Test
If using a screen reader:
1. Tab to Name field
2. Screen reader announces: "Full Name, required, invalid, please enter your name" (or similar)
3. Screen reader user hears the error immediately

### Steps (Error Clearing)
1. With errors still visible, click in the Name field
2. Type: "Michael"
3. Observe: Red border disappears, error message disappears immediately ✅

### What It Means
- Users see AND hear validation errors (not just colored borders)
- Errors clear immediately as they start typing (better UX)
- Screen reader users get full context about what's wrong

---

## Test 4: Lightbox — Keyboard Navigation & Focus 🎹

### What to Check
Lightbox traps focus and restores it when closed.

### Steps (Visual Focus Test)
1. Scroll to Portfolio section
2. Click any project card (e.g., "S. Florida High Rise Luxe Condo")
3. Lightbox opens with image + navigation
4. Press **Tab** repeatedly
5. Observe: Focus cycles through lightbox controls only:
   - Close button (X)
   - Previous arrow button
   - Next arrow button
   - Thumbnail images (if visible)
6. Focus should **NOT** jump to background page elements
7. Press **Escape** key
8. Lightbox closes ✅
9. Check where focus is now:
   - Should be back on the project card you clicked ✅
   - Not at top of page ✅
   - Not lost/undefined ✅

### Expected Result
✅ Tab stays within lightbox while open  
✅ Escape key closes lightbox  
✅ Focus returns to project card  
✅ Can continue navigation from card  

### Inspector Verification
1. Open lightbox
2. Press F12 to open DevTools
3. In Console, type: `document.activeElement`
4. You should see: `<div id="lightbox" ...>` (or a control inside it)
5. Close lightbox with Escape
6. Type again: `document.activeElement`
7. You should see: The `<div class="portfolio-card">` you clicked

### Screen Reader Test
If using screen reader:
1. Tab through portfolio cards
2. Click one to open lightbox
3. Screen reader announces: "Image gallery dialog" (or similar)
4. Tab through controls — listen to announcements
5. Press Escape
6. Screen reader refocuses on card, announces it's active again

### What It Means
- Keyboard-only users can navigate the lightbox safely
- Focus doesn't get trapped or lost (accessibility requirement)
- Better experience for users who can't use a mouse

---

## Test 5: Lightbox — Image Alt Text 🖼️

### What to Check
Lightbox images have proper em-dash in alt text (not HTML entity).

### Steps
1. Open any project lightbox
2. Open DevTools Inspector (F12)
3. In the Inspector, find the `<img id="lb-img">`
4. Look at the `alt` attribute
5. You should see something like:
   ```
   alt="Project Name — image 1"
   ```
   (with a proper em-dash `—`, NOT `&mdash;`)

### Inspector Check
1. Right-click the lightbox image
2. Click "Inspect"
3. Look for `alt="..."` attribute
4. Verify it contains: `—` (em-dash character)
5. NOT: `&mdash;` (HTML entity rendered as text)

### Expected Result
✅ Alt text uses proper em-dash character  
✅ Screen readers pronounce it naturally  
✅ Looks correct when inspected  

### What It Means
Proper typography in alt text, screen readers announce it correctly.

---

## Complete Testing Checklist

Use this checklist to track your testing progress:

### CSP Header
- [ ] Open DevTools Console
- [ ] No CSP error messages present
- [ ] Page loads with all resources (fonts, styles, images)
- [ ] No 403/blocked resource errors

### Filter Buttons
- [ ] Inspect filter buttons
- [ ] Active button has `aria-pressed="true"`
- [ ] Inactive buttons have `aria-pressed="false"`
- [ ] Filter buttons state updates on click
- [ ] (Optional) Screen reader announces "pressed" state

### Form Validation
- [ ] Submit empty form
- [ ] Red borders appear on required fields
- [ ] Error text appears below fields
- [ ] Error text is readable/visible
- [ ] Errors clear when you start typing
- [ ] (Optional) Screen reader announces errors

### Lightbox Focus
- [ ] Open lightbox with Tab + Enter
- [ ] Tab stays within lightbox
- [ ] Escape key closes lightbox
- [ ] Focus returns to project card
- [ ] Can Tab back into page navigation
- [ ] (Optional) Screen reader announces dialog opening/closing

### Lightbox Alt Text
- [ ] Inspect lightbox image
- [ ] Alt text contains proper em-dash (—)
- [ ] Alt text does NOT contain `&mdash;`

---

## Troubleshooting

### Problem: CSP Errors in Console
**Symptom**: Error like "Refused to load the stylesheet 'fonts.googleapis.com'"

**Solution**: 
- Check that `fonts.googleapis.com` is in the CSP `style-src` directive
- Verify the CSP line is correctly formatted (no typos)
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

### Problem: Filters Don't Show `aria-pressed`
**Symptom**: Filter buttons don't have `aria-pressed` attribute when inspected

**Solution**:
- Verify you pulled the latest version: `git pull`
- Check line 2510 in `index.html` has `aria-pressed="true"` on the All button
- Clear browser cache and reload

---

### Problem: Form Errors Don't Show
**Symptom**: Submit empty form, but no error messages appear

**Solution**:
- Check DevTools Console for JavaScript errors
- Verify error span elements exist (Inspector → right-click name field)
- Check that error spans have `id="disc-name-error"` and `id="disc-email-error"`
- Verify the input has matching `aria-describedby` attributes

---

### Problem: Lightbox Focus Not Returning
**Symptom**: Close lightbox with Escape, focus doesn't return to card

**Solution**:
- Check console for any JavaScript errors
- Verify lightbox has `tabindex="-1"` (Inspector → line 4675)
- Verify `lastActiveTrigger` variable is being set (check source)
- Try opening/closing lightbox again

---

### Problem: Screen Reader Not Working
**Symptom**: Can't hear screen reader announcements

**Solution**:
- Ensure screen reader is enabled:
  - macOS: Cmd + F5 to toggle VoiceOver
  - Windows: Check NVDA is running (system tray icon)
- Click on page to give it focus
- Press Control (Mac) or NVDA key + Tab to navigate

---

## Next Steps After Testing

Once all tests pass:

1. **Document Results** — Write down which tests passed/failed
2. **Fix Any Issues** — See troubleshooting section above
3. **Commit Verification** — (Optional) Add a testing verification note to git
4. **Move to Phase 2** — Ready for performance optimization + form backend

If you encounter issues, check the error details and let me know!

---

## Quick Reference: Keyboard Shortcuts

| Action | Chrome/Firefox | Safari | Screen Reader |
|--------|---|---|---|
| Open DevTools | F12 | Cmd+Option+I | N/A |
| Inspector/Elements | Ctrl+Shift+C | Cmd+Option+U | N/A |
| Console | Ctrl+Shift+J | Cmd+Option+J | N/A |
| Hard Refresh | Ctrl+Shift+R | Cmd+Shift+R | N/A |
| Enable VoiceOver (Mac) | N/A | Cmd+F5 | Cmd+F5 |
| Enable NVDA (Windows) | N/A | N/A | Win+N |
| Tab Navigation | Tab | Tab | Tab |
| Screen Reader Read | N/A | N/A | VO+A (Mac) or Insert+Down (NVDA) |

---

**Ready to test?** Start with Test 1 (CSP validation) and work through the checklist. Let me know which tests pass and if you hit any issues!
