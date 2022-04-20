import Post from './Components/Post/Post';

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
                    {props.parentPost.map((post,index) => {
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{post.name}</td>
                            <td>{post.post}</td>                    
                        </tr>
                    );
                    })}
                </tbody>
        </table>
    );
                }
export default DisplayPost;