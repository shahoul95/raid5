const block = [
  {
    id: '1',
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    colonne: [{ id: '1', value: 'Disk0' }, { id: '2', value: 'Disk2' }, { id: '3', value: 'Disk3' }, { id: '4', value: 'Disk3' }, { id: '5', value: 'Disk4' }]
  },
]

export const block$ = new Promise((resolve, reject) => setTimeout(resolve, 100, block))