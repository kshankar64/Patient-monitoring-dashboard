health-track/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Dashboard.js      # Real-time patient data visualization
│   │   ├── App.js                # Main application component
│   │   ├── index.js              # ReactDOM entry point
│   │   └── index.css
│   ├── public/
│   │   └── index.html            # Main HTML template
│   └── package.json              # React dependencies
├── backend/
│   ├── handlers/
│   │   └── dataProcessor.js      # AWS Lambda function
│   ├── serverless.yml            # Serverless Framework config
│   └── package.json              # AWS SDK dependencies
├── infrastructure/
│   ├── main.tf                   # Terraform AWS resources
│   ├── variables.tf              # AWS region configuration
│   └── outputs.tf                # DynamoDB table name output
└── deployment/
    ├── README.md                 # Setup instructions
    └── .gitignore                # Exclusion rules
