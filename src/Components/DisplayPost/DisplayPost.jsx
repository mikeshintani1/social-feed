
import CustomButton from '../CustomButton/CustomButton.jsx';

const DisplayPost = (props) => {

    return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Post</th>
                <th scope="col">Like/Dislike</th>
                </tr>
            </thead>
                <tbody>
                    {props.parentPosts.map((entry,index) => {
                    return(
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.comment}</td>
                            <td><CustomButton message='Like'/></td>                    
                        </tr>
                    );
                    })}
                </tbody>
        </table>
    );
                }
export default DisplayPost;