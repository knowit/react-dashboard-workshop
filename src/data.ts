export interface Assignment {
  name: string;
  approved: boolean;
};

export interface Subject {
  name: string;
  assignments: Assignment[];
}

export const subjects: any = [
  {
    name: 'AI',
    assignments: [
      {
        name: 'AI Øving 1',
        approved: true,
      },
      {
        name: 'AI Øving 2',
        approved: false,
      },
    ]
  },
  {
    name: 'ITGK',
    assignments: [
      {
        name: 'ITGK Øving 1',
        approved: true,
      },
      {
        name: 'ITGK Øving 2',
        approved: false,
      },
    ]
  }
];
