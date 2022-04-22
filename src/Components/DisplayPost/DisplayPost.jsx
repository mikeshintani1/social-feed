
import './DisplayPost.css'
import CustomButton from '../CustomButton/CustomButton.jsx';


const DisplayPost = (props) => {

    return(
        <table className="table" chartType='Table'>
            <thead>
                <tr>
                <th scope="col" className ="name-col">Name</th>
                <th scope="col" className='post-col'>Post</th>
                <th scope="col" className='button-col'>Like/Hate</th>
                </tr>
            </thead>
                <tbody>
                    {props.parentPosts.map((entry,index) => {
                    return(
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td className='comment-col'>{entry.comment}</td>
                            <td><CustomButton className='button-message' message="x"/></td>
                        </tr>
                    );
                    })}
                </tbody>
        </table>
    );
                }
export default DisplayPost;