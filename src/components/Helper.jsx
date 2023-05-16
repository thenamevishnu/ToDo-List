export function CompletedTasks(props){
    if(props.ToDo.length===0){
        return (
            <span>0</span>
        );
    }
    return (
        <span>{props.ToDo.filter((obj)=>obj.status===true).length}</span>
    );
}

export function PendingTasks(props){
    if(props.ToDo.length===0){
        return (
            <span>0</span>
        );
    }
    return (
        <span>{props.ToDo.filter((obj)=>obj.status===false).length}</span>
    );
}