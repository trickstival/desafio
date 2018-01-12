export default [
    {
        label: '',
        field: 'enumeration',
        width: '10px'
    },
    {
        label: 'Nome',
        field: 'nome',
        width: '100px'
    },
    {
        label: 'Sobrenome',
        field: 'sobrenome',
        width: '100px'
    },
    {
        label: 'Participação',
        field: 'participacao',
        width: '100px',
        format(val, row){
            return val + '%'
        }
    }
]