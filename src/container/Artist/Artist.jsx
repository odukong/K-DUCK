import React,{useState} from 'react';
import styled from 'styled-components';
import {SelectBox,Label,SelectOptions,Option} from "./Artist.style";
import Modal from './Modal';
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

/*모달 창(react-modal)& search 기능 & 정렬하기 & 더보기 기능*/
const Artist = () => {
    /*정렬기능*/
    const [isShowOptions,setIsShowOptions]=useState(false);
    const [currentValue,setCurrentValue]=useState("기본순");
    const sortedItem = () => {
        if (currentValue === '기본순') {
            return datas.artists;
        } else if (currentValue === "오름차순") {
            return [...datas.artists].sort((a, b) => a.name.localeCompare(b.name));
        } else if (currentValue === "내림차순") {
            return [...datas.artists].sort((a, b) => b.name.localeCompare(a.name));
        }
    }
    /*모달 창 오픈*/
    const [modalOpen,setModalOpen]=useState(false);
    const [selectedArtist,setSelectedArtist]=useState("");
    const handleOnChangeOption=(e)=>{
        const {innerText}=e.target;
        setCurrentValue(innerText);
    }
    const handleArtistClick=(artist)=>{
        setSelectedArtist(artist);
        setModalOpen((pre)=>!pre);
    }
    /*검색 기능*/
    const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가

    const handleSearchChange = (e) => { // 검색어 변경 핸들러
        setSearchTerm(e.target.value);
    }
    /*더보기 기능*/
    const [moreCount,setMoreCount]=useState(4);
    const handleShowMoreCount=()=>{setMoreCount((prev)=>prev+4)}

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
                    <input type="text" value={searchTerm} onChange={handleSearchChange}></input>
                    <BsSearch color="black" fontSize={20}/>
                </div>
                <SelectBox className='app__artist-search-sort' onClick={()=>setIsShowOptions((prev)=>!prev)}>
                    <Label>{currentValue}</Label>
                    <SelectOptions show={isShowOptions}>
                        {sorts.map((sort,_)=>
                            <Option onClick={handleOnChangeOption}>{sort.title}</Option>
                        )}
                    </SelectOptions>
                </SelectBox> 
            </div>
            <div className='app__artist-content'>
                {
                    sortedItem().slice(0,moreCount).map((artist)=>{ 
                        const artistName = artist.name.toLowerCase(); // 아티스트 이름을 소문자로 변환
                        const searchTermLower = searchTerm.toLowerCase();
                        if (!searchTerm || artistName.includes(searchTermLower)) { 
                            return(
                                <ArtistCard onClick={()=>handleArtistClick(artist)} key={artist.id}>
                                    <div className='app__artist-content-img'>
                                        <img src={artist.imgUrl} width={290} height={190} alt={`${artist.name}`}/>
                                    </div>
                                    <div className='app__artist-content-groupName p__eng'>{artist.name}</div>
                                </ArtistCard>
                            )
                        }
                    })
                }
            </div>
            <div className='more-content'>
                {(datas.artists.length>moreCount)&&<button className='more-button p__kor' onClick={handleShowMoreCount}>더보기</button>}
            </div>
            {modalOpen&&<Modal artist={selectedArtist} setOpen={setModalOpen} isOpen={modalOpen}/>}
        </div>        
    );
};

export default Artist;