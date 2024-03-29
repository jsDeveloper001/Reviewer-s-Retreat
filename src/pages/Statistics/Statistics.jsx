import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ReadDatabase } from '../../utils/localStorage';

const Statistics = () => {
    const BookDatas = useLoaderData();
    const [Data, setdata] = useState([])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
       C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
       C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
       Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    }
    useEffect(() => {
        const NewArray = []
        const LoadReadIds = ReadDatabase("ReadList");
        if (LoadReadIds.length > 0) {
            const ReadListBooks = BookDatas.filter(bookData => LoadReadIds.includes(bookData.bookId))

            ReadListBooks.forEach((ReadListedBook) => {
                const newData = { Name: ReadListedBook.bookName, Pages: ReadListedBook.totalPage, Background: ReadListedBook.DataBg }
                NewArray.push(newData)
            })
        }
        setdata(NewArray)
    }, [BookDatas])

    return (
        <div className='mx-auto lg:w-1/2'>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart width={300} height={300} data={Data}>
                    <XAxis dataKey="Name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />}>
                        {Data.map((data, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            // <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

            {
                console.log(Data)
            }
        </div>
    );
};

export default Statistics;