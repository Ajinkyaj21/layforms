export const demoData = [
  {
    id:' 1',
    field_label: 'first_name',
    display_name: 'First name',
    description: '[Validation: Only alphabets]',
    input_type: 'text',
    value_type: 'string',
    validation: [{
      key: 'regex_check',
      type: 'equal',
      value: '^[a-zA-Z]+$',
      error_message: 'First name can only have characters.'
    }]
  }, {
    id:' 2',
    field_label: 'last_name',
    display_name: 'Last name',
    description: '[Validation: Only alphabets]',
    input_type: 'text',
    value_type: 'string',
    validation: [{
      key: 'regex_check',
      type: 'equal',
      value: '^[a-zA-Z]+$',
      error_message: 'Last name can only have characters.'
    }]
  }, {
    id:' 3',
    field_label: 'age',
    display_name: 'Age',
    description: '[18 - 70 years]',
    input_type: 'text',
    value_type: 'number',
    validation: [{
      key: 'regex_check',
      type: 'equal',
      value: '^[0-9]+$',
      error_message: 'Age can only be an integer.'
    }, {
      logic: 'and',
      key: 'value_check',
      type: 'greater',
      value: '18',
      error_message: 'Age has to be greater than 18.'
    }, {
      logic: 'and',
      key: 'value_check',
      type: 'lesser',
      value: '70',
      error_message: 'Age has to be lesser than 70.'
    }]
  }, {
    id:' 4',
    field_label: 'languages',
    display_name: 'Languages',
    description: '',
    input_type: 'checkbox',
    value_type: 'string',
    options: ['Hindi', 'English', 'Marathi', 'Others'],
    validation: []
  }, {
    id:' 5',
    field_label: 'gender',
    display_name: 'Gender',
    description: '',
    input_type: 'radio',
    value_type: 'string',
    options: ['Male', 'Female', 'Others'],
    validation: []
  }, {
    id:' 6',
    field_label: 'education',
    display_name: 'Education',
    description: 'Select your education level',
    input_type: 'select',
    value_type: 'string',
    options: ['10th pass', '12th pass', 'Graduate', 'Post-graduate'],
    validation: []
  }, {
    id:' 7',
    field_label: 'board',
    display_name: 'Board',
    description: 'Select your education level',
    input_type: 'select',
    value_type: 'string',
    options: ['CBSE', 'ICSE', 'Maharashtra'],
    validation: [],
    preRequisites: [{
      field_label: 'education',
      value: '10th pass'
    }, {
      field_label: 'education',
      value: '12th pass',
      logic: 'or'
    }, {
      field_label: 'citizenship',
      value: 'Indian',
      logic: 'and'
    }]
  }, {
    id:' 8',
    field_label: 'specialization',
    display_name: 'Specialization',
    description: '',
    input_type: 'select',
    value_type: 'string',
    options: ['IT', 'Mechanical', 'Electronics', 'Computer Science'],
    validation: [],
    preRequisites: [{
      field_label: 'education',
      value: 'Graduate'
    }, {
      field_label: 'education',
      value: 'Post-graduate',
      logic: 'or'
    }, {
      field_label: 'citizenship',
      value: 'Indian',
      logic: 'and'
    }]
  }, {
    id:' 9',
    field_label: 'marital_status',
    display_name: 'Marital Status',
    description: '',
    input_type: 'radio',
    value_type: 'string',
    options: ['Married', 'Unmarried'],
    validation: [],
    preRequisites: [{
      field_label: 'education',
      value: '10th pass'
    }]
  }, {
    id: '10',
    field_label: 'citizenship',
    display_name: 'Citizenship',
    description: 'Select your education level',
    input_type: 'radio',
    value_type: 'string',
    options: ['Indian', 'Non-Indian'],
    validation: []
  }, {
    id: '11',
    field_label: 'specify_language',
    display_name: 'Language',
    description: 'please specify language',
    input_type: 'text',
    value_type: 'string',
    validation: [],
    preRequisites: [{
      field_label: 'languages',
      value: 'Others'
    }]
  }, {
    id: '12',
    field_label: 'country',
    display_name: 'Country',
    description: '',
    input_type: 'select',
    value_type: 'string',
    options: ['India', 'USA', 'UK','Australia', 'Others'],
    validation: [],
    preRequisites: [{
      field_label: 'citizenship',
      value: 'Non-Indian'
    }]
  }, {
    id: '13',
    field_label: 'specify_country',
    display_name: 'Country',
    description: 'please specify country',
    input_type: 'text',
    value_type: 'string',
    validation: [],
    preRequisites: [{
      field_label: 'country',
      value: 'Others'
    }]
  }, {
    id: '14',
    field_label: 'state',
    display_name: 'State',
    description: '',
    input_type: 'select',
    value_type: 'string',
    options: ['Gujarat', 'Maharashtra', 'Karnataka', 'Bihar', 'Others'],
    validation: [],
    preRequisites: [{
      field_label: 'citizenship',
      value: 'Indian'
    }]
  }, {
    id: '15',
    field_label: 'specify_state',
    display_name: 'State',
    description: 'please specify state',
    input_type: 'text',
    value_type: 'string',
    validation: [],
    preRequisites: [{
      field_label: 'state',
      value: 'Others'
    }]
  }, {
    id: '16',
    field_label: 'password',
    display_name: 'Password',
    input_type: 'password',
    value_type: 'string',
    validation: []
  }, {
    id: '17',
    field_label: 'confirm_password',
    display_name: 'Confirm Password',
    input_type: 'password',
    value_type: 'string',
    validation: [{
      key: 'value_check',
      type: 'equal',
      field_label: 'password',
      error_message: 'Passwords should match.'
    }]
  }, {
    id: '18',
    field_label: 'income',
    display_name: 'Annual Income Range',
    description: '',
    input_type: 'select',
    value_type: 'string',
    options: ['0 - 5 lakhs', '5 - 10 lakhs', '10 - 25 lakhs', '> 25 lakhs'],
    validation: []
  }, {
    id: '19',
    field_label: 'tax_paid',
    display_name: 'Tax paid last year',
    description: '',
    input_type: 'select',
    value_type: 'string',
    options: ['0 - 2 lakhs', '2 - 5 lakhs', '5 - 10 lakhs', '> 10 lakhs'],
    validation: [],
    preRequisites: [{
      field_label: 'income',
      value: '5 - 10 lakhs'
    }, {
      logic: 'or',
      field_label: 'income',
      value: '10 - 25 lakhs'
    }, {
      logic: 'or',
      field_label: 'income',
      value: '> 25 lakhs'
    }]
  }, {
    id: '20',
    field_label: 'occupation',
    display_name: 'Occupation',
    description: '',
    input_type: 'select',
    value_type: 'string',
    options: ['Salaried', 'Business', 'Student', 'None'],
    validation: []
  }
  ];
  