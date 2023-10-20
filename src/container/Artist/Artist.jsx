import React from 'react';
import styled from 'styled-components';
import {images,datas} from "../../constants";
import { BsSearch } from 'react-icons/bs';
import "./Artist.css";
const sorts=[
    {id:1,title:'기본순'},
    {id:2,title:'오름차순'},
    {id:3,title:'내림차순'}
]

const ArtistCard=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:30px;
    margin-right:30px;

    width:320px;
    height:280px;
    
    background-color:white;
    transition:0.3s ease;
    
    &:hover{
        box-shadow: 0 5px 9px rgba(0, 0, 0, 0.2);
    }
`
/**select도 li로 바꿔서 styled component로 변경*/
/*모달 창(react-modal)& search 기능 & 정렬하기 & 더보기 기능*/
const Artist = () => {
    return (
        <div className="app__artist">
            <div className='app__artist-title'>
                <div className='app__artist-maintitle headerText'>K-POP Artist</div>
                <div className='app__artist-subtitle p__kor'>케이팝 아티스트 그게 누구야 ? 아주 대단하신 분들이지 ~</div>
                <div className='app__artist-title_bg'>
                    <img src={images.pink_paint} alt="pink_paint" width={330} height={250}/>
                </div>
            </div>
            <div className='app__artist-search'>
                <div className='app__artist-search-bar'>
                    <input type="text"></input>
                    <BsSearch color="black" fontSize={20}/>
                </div>
                <div className='app__artist-search-sort'>
                    <select>
                        {sorts.map((sort)=>{
                            return(
                                <option key={sort.id}>{sort.title}</option>
                            )
                        })}
                    </select>
                </div> 
            </div>
            <div className='app__artist-content'>
                {
                    datas.artists.map((artist)=>{
                        return(
                            <ArtistCard>
                                <div className='app__artist-content-img'>
                                    <img src={artist.imgUrl} width={290} height={190} alt={`${artist.name}`}/>
                                </div>
                                <div className='app__artist-content-groupName p__eng'>{artist.name}</div>
                            </ArtistCard>
                        )
                    })
                }
            </div>
            <div className='more-content'>
                <button className='more-button p__kor'>더보기</button>
            </div>
        </div>
    );
};

export default Artist;