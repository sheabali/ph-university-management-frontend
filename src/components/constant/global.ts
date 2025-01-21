export const monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const monthOption = monthName.map((item) => ({
  value: item,
  label: item,
}));

export const gender = ['Male', 'Female', 'Other'];

export const genderOption = gender.map((item) => ({
  value: item,
  label: item,
}));

export const bloogGroup = ['A+', 'A-', 'O-', 'O+'];

export const bloogGroupOption = bloogGroup.map((item) => ({
  value: item,
  label: item,
}));
