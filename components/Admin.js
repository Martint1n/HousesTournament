import Lune from "./Lune"

function Admin() {
  const data = [
    {
      pseudo: 'zoe',
      points: 100,
      maison: 'etoile',
    },
    {
      pseudo: 'Arthur',
      points: 15,
      maison: 'lune',
    }
  ]

const table = data.map((artist, i) =>{
  return (
    <tr key={i}>
        <th scope='row'>{artist.pseudo}</th>
        <td><button>+1</button></td>
        <td><button>+10</button></td>
        <td><button>-10</button></td>
        <td>{artist.points}</td>
      </tr>
  )
})


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <table>
    <caption>
        Admin dashboard
    </caption>
    <thead>
        <tr>
            <th scope='col'>Nom</th>
            <th scope='col'>+1</th>
            <th scope='col'>+10</th>
            <th scope='col'>-10</th>
            <th scope="col">points</th>
        </tr>
    </thead>
    <tbody>
      {table}
    </tbody>
</table>
<Lune src="lune.svg" color="blue" />
</div>
)
}

export default Admin;
