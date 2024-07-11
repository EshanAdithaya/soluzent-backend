module.exports = {
  apps: [
    {
      name: 'Soluzent Marketing Tool',
      script: './dist/main.js', // Path to the compiled main file
      instances: '1', // Scales the app based on the number of available CPUs set to Max in production
      exec_mode: 'fork', // Enables clustering mode //set to cluster in production
      watch: true, // Optional: watches for file changes and restarts the app
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
