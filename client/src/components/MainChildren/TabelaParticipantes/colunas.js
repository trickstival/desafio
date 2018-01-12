export default [
    {
        label: '',
        field: 'enumeration',
        width: '15px'
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
        width: '60px',
        format(val, row){
            return val + '%'
        }
    }
]