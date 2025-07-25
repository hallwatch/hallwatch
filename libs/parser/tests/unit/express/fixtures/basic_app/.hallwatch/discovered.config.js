// Auto-generated Hallwatch configuration
// Generated: 2025-07-22T15:21:13.835173+00:00
// Version: 1.0.0
// Debug Mode: true

export default {
  // Metadata
  _meta: {
    version: "1.0.0",
    generated: "2025-07-22T15:21:13.835173+00:00",
    lastModified: "2025-07-22T15:21:13.835173+00:00",
    debugMode: true,
  },

  // Global configuration
  debugMode: true,

  // Detected project structure
  structure: {
    type: "single",
    fileCount: 4,
    totalSize: 2110,
    roots: [],
  },

  // Detected frameworks
  frameworks: [
    {
      path: "/Users/isaiahdahl/deployment/hallwatch/libs/parser/tests/unit/express/fixtures/basic_app",
      framework: "express",
      confidence: 1,

      // Detection signals (debug mode)
      _signals: [
        { type: "package.json", value: "express dependency found", confidence: 0.8, source: "/Users/isaiahdahl/deployment/hallwatch/libs/parser/tests/unit/express/fixtures/basic_app/package.json" },
        { type: "code_pattern", value: "express() or app.method() found", confidence: 0.9, source: "/Users/isaiahdahl/deployment/hallwatch/libs/parser/tests/unit/express/fixtures/basic_app/app.js" },
      ],

      // Patterns for route detection
      patterns: [
        {
          name: "express.basic-routes",
          files: "**/*.{js,ts}",
          routes: ["app.{method}('{path}', {handler})", "app.{method}('{path}', {middlewares}, {handler})"],
          confidence: 0.95,
        },
        {
          name: "express.router",
          files: "**/routes/**/*.{js,ts}",
          routes: ["router.{method}('{path}', {handler})"],
          confidence: 0.9,
        },
      ],
    }
  ],

  // Performance settings (auto-calculated)
  performance: {
    threads: "auto",
    cacheStrategy: "minimal",
    maxFileSize: "1MB",
    estimatedScanTime: "<10 seconds",
  },

  // User overrides (preserved between regenerations)
  overrides: {
    // Add your custom patterns here
    // These will be preserved when config is regenerated
    
    // Example:
    // customPatterns: [
    //   {
    //     name: 'my-custom-api',
    //     files: 'lib/handlers/**/*.js',
    //     routes: ['defineHandler("{method}", "{path}", {handler})']
    //   }
    // ]
  },
};
