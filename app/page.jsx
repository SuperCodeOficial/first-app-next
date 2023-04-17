import Users from '@/components/Users';

async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
  // console.log(data);
}

async function IndexPage(){
  const users = await fetchUsers();
  console.log(users)
  
  return (
    <div>
      <h1 className='text-center pb-4'>Listado General de Usuarios</h1>
      <Users users={users}/>
    </div>
  )
}

export default IndexPage;