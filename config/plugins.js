module.exports = {
  upload: {
    config: {
      mimeTypes: [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp', // ✅ Add this!
        'image/svg+xml',
        'application/pdf',
      ],
    },
  },
};