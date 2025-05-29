function Map() {
    var arr1 = ['Apple','Car','Door'];
    var arr2 = [1,5,3,2,6,8,9];
    arr2 = arr2.filter((v)=>(v>4));
    var arr3 = [{
        sname : 'abc',
        rollno : 145,
        marks : 22
    },
    {
        sname : 'def',
        rollno : 152,
        marks : 20
    },
    {
        sname : 'pqr',
        rollno : 180,
        marks : 34 
    },
    {
        sname : 'xyz',
        rollno : 160,
        marks : 14
    }];
    arr3 = arr3.filter((v)=>(v.marks > 20));
    return (
        <>
            {
                arr1.map((v)=><h1>{v.toUpperCase()}</h1>)
            }

            {
                arr2.map((v)=>{
                    if(v > 4){
                        return <h2>Value more than 4 : {v}</h2>
                    }else{
                        return false
                    }
                })
            }

            {arr2.join(',')}

           <table border={1}>
            <tr>
                <th>Student Name</th>
                <th>Roll No</th>
                <th>Marks</th>
            </tr>
            {
                arr3.map((v)=>{
                    return <tr>
                        <td>{v.sname}</td>
                        <td>{v.rollno}</td>
                        <td>{v.marks}</td>
                    </tr>
                })
            }
           </table>
        </>
    )
}

export default Map;