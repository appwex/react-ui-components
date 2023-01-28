import React from 'react'
import avatar1 from '../../assets/images/avatar-artwork1.png'
import avatar2 from '../../assets/images/avatar-artwork2.png'
import avatar3 from '../../assets/images/avatar-artwork3.png'
import avatar4 from '../../assets/images/avatar-artwork4.png'
import avatar5 from '../../assets/images/avatar-artwork5.png'
import avatar6 from '../../assets/images/avatar-artwork6.png'
import styled from 'styled-components'

const data = [
  {
    id: 1,
    name: 'Darwin Shaffer',
    username: '@Oschaf_1',
    img: avatar1,
    follower: 'Following',
  },
  {
    id: 2,
    name: 'Widon Wari',
    username: '@Wildonwari_21',
    img: avatar2,
    follower: 'Follow',
  },
  {
    id: 3,
    name: 'Anna Sadboy',
    username: '@Sadboy_95',
    img: avatar3,
    follower: 'Follow',
  },
  {
    id: 4,
    name: 'Chace Rajas',
    username: '@Chace_06',
    img: avatar4,
    follower: 'Follow',
  },
  {
    id: 5,
    name: 'Sakaw_332',
    username: '@Wildonwari_21',
    img: avatar5,
    follower: 'Follow',
  },
  {
    id: 6,
    name: 'Anna Sadboy',
    username: '@Sadboy_95',
    img: avatar6,
    follower: 'Follow',
  },
]

const TopCreators = () => {
  return (
    <Wrapper>
      <div className="aside-wrapper">
        <div className="header">
          <h2>Top Creators</h2>
          <span>See all</span>
        </div>
        <div className="content-wrapper">
          {data.map(item => {
            return (
              <div
                key={item.id}
                className={`${
                  item.id === 'Follower' ? 'active-creator' : 'creator-card'
                }`}
              >
                <div className="avatar">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="info">
                  <h6>{item.name}</h6>
                  <span>{item.username}</span>
                </div>
                <div
                  className={`${
                    item.follower == 'Following'
                      ? 'following-btn'
                      : 'follow-btn'
                  }`}
                >
                  <button>{item.follower}</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  max-width: 354px;
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0px 14px 54px rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Gilroy-SemiBold';
    margin-bottom: 10px;
    h2 {
      padding: 0;
      margin: 0;
      font-size: 22px;
      line-height: 26px;
    }
    span {
      font-size: 16px;
      line-height: 19px;
      color: #55c960;
    }
  }

  .creator-card {
    display: flex;
    align-items: center;
    padding: 10px 0;

    .avatar {
      width: 54px;
      img {
        width: 100%;
        object-fit: contain;
      }
    }

    .info {
      h6 {
        font-size: 14px;
        line-height: 16px;
        color: #1e1e2d;
      }
      span {
        font-weight: 457;
        font-size: 10px;
        line-height: 12px;
        color: #a1a2af;
      }
    }
    .following-btn {
      background: #ffffff;
      margin-left: auto;

      button {
        background: #1e1e2d;
        display: block;
        height: 40px;
        border-radius: 101px;
        border: none;
        width: 90px;
        color: #ffffff;
        font-size: 12px;
        line-height: 14px;
      }
    }

    .follow-btn {
      margin-left: auto;
      button {
        width: 90px;
        height: 40px;
        border: 1px solid #efefef;
        border-radius: 101px;
        background: #ffffff;
        font-size: 12px;
        line-height: 14px;
        color: #1e1e2d;
      }
    }
  }
`

export default TopCreators
