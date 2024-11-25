import { Calendar } from 'lucide-react';
import "./news.css"

const newsItems = [
  {
    date: '20 APR',
    title: 'The Covid-19 Epidemic In 2023 Is Back',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=300',
    category: 'Health'
  },
  {
    date: '17 MAR',
    title: 'New Research Shows Promise in Vitamin D Studies',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=300',
    category: 'Research'
  },
  {
    date: '15 MAR',
    title: 'Understanding the Role of Supplements in Daily Life',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300',
    category: 'Lifestyle'
  }
];

export default function News() {
  return (
    <div className='NewReoport'> 
    <p style={{color:"black"}}>News Report </p>
     <div className="container">
    <div className="column">
        <div className="upper">
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
        <div className="lower">
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
    </div>
    <div className="column">
        <div className="lower">
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
        <div className="upper">
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
    </div>
    <div className="column">
        <div className="upper">
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
        <div className="lower">
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
    </div>
    <div className="column">
        <div className="lower">
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
        <div className="upper">
            <p>The Covid-19 Epidemic In 2023 Is Back</p>
        </div>
    </div>
      </div>
    </div>
  );
}