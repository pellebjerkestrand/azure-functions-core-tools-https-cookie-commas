To reproduce HTTPS cookie header using comma as delimiter on Windows, run (on Windows):

```
npm ci
npm test
```

On macOS and Linux, you should see something like this output:

```
Running 2 tests using 1 worker

  ✓  1 [chromium] › test.spec.ts:3:1 › http (383ms)
  ✓  2 [chromium] › test.spec.ts:5:1 › https (161ms)

  2 passed (5.1s)
```
