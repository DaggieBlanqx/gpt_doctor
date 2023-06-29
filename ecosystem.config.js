module.exports = {
  apps: [
    {
      name: 'GPT DOCTOR',
      script: '/var/webapps/gpt_doctor/server.js',
      args: '',
      instances: 1,
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules', 'public', 'logfiles'],
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production' || 'development'
      },
      env_production: {
        NODE_ENV: 'production' || 'development'
      },
      exec_mode: 'cluster',
      error_file: './logfiles/gpt_doctor-error_file.log',
      out_file: './logfiles/gpt_doctor-output_file.log',
      ref: 'origin/main',
      repo: 'https://github.com/DaggieBlanqx/gpt_doctor'
    }
  ]
}
