const DisplayPost = (props) => {
    return(
        <table className="table">
            <thread>
                <tr>
                <th>Name</th>
                <th>Post</th>
                </tr>
            </thread>
            <tbody>
                {props.parentPost.map((entry,index) => {
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{entry.name}</td>
                        <td>{entry.post}</td>                    
                    </tr>
                );
                })}
            </tbody>
        </table>
    );
}

export default DisplayPost;