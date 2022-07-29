type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObject = (activeMenu: MenuOptions) =>{

    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    //SE 'activeMenu' NÃO ESTIVER VAZIO
    //ENTÃO 'returnObject' SERÁ TRUE

    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
}