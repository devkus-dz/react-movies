import './App.css'
import Card from './components/Card'
import Search from './components/Search'

function App() {
  
  return (
    <>
      <div className="container">
        <Search />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <Card 
            data={{
                title:       "Film Title",
                category:    "Category",
                image:       "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                description: "lorem ipsum sit amet",
                releaseDate: "Feb 23, 2025"
              }}  

              like={false}
          />
        </div>
      </div>

    </>
  )
}

export default App
