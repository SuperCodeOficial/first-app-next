async function getUser(id){
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  console.log(data);
  return data.data
}
async function PageUsers({params}) {
  const user = await getUser(params.id);
  // console.log(data);
  return (
    <div className="container">
      <div className="text-center pb-5">
      <h1>User Details</h1>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img className="image-card" src={user.avatar} alt={user.email} />
            </div>
            <div className="card-body text-center">

            <h3>
              {user.first_name} {user.last_name}
              <p>{user.email}</p>
            </h3>

            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default PageUsers