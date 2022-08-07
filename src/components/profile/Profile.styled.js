import styled from '@emotion/styled';

export const Card = styled.div`
  width: var(--main-width);
  margin: 16px auto;
  padding: 16px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--profile-bgc);
  border: 3px solid var(--profile-fbgc);
`;

export const Description = styled.div`
  width: 80%;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--second-bgc);
  outline: 1px solid var(--main-color);
`;
export const Avatar = styled.img`
  border: 2px solid var(--main-color);
  border-radius: 50%;
  transition: var(--transition);
  :hover {
    transform: scale(1.4);
    border-color: var(--accent);
  }
`;

export const Username = styled.p`
  color: var(--text-color);
  margin: 32px 0 0 0;
  font-family: var(--main-font);
  font-weight: bolder;
  :hover {
    color: var(--accent);
    cursor: pointer;
  }
`;
export const Tag = styled.p`
  color: var(--main-color);
  margin: 16px 0 0 0;
  :hover {
    color: var(--accent);
    cursor: pointer;
  }
`;
export const Location = styled.p`
  color: var(--main-color);
  :hover {
    color: var(--accent);
    cursor: pointer;
  }
`;

export const Stats = styled.ul`
  width: 80%;
  display: flex;
  align-items: center;
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 700;
  background-color: var(--profile-stats-bgc);
`;

export const Item = styled.div`
  width: 33.333%;
  text-align: center;
  outline: 1px solid var(--main-color);
  :hover {
    color: var(--accent);
  }
`;
export const Label = styled.span`
  display: inline-block;
  padding: 16px;
  color: var(--offline-color);
`;
export const Quantity = styled.span`
  display: inline-block;
  padding: 8px;
`;
