import styled from '@emotion/styled';

export const Wrapper = styled.section`
  width: var(--main-width);
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--profile-bgc);
  border: 1px solid var(--profile-fbgc);
`;

export const Card = styled.div`
  width: 100%;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--second-bgc);
  outline: 1px solid var(--main-color);
`;
export const Avatar = styled.img`
  display: inline-block;
  border: 2px solid var(--main-color);
  border-radius: 50%;
  transition: var(--transition);
  :hover {
    transform: scale(1.4);
    border-color: var(--accent);
  }
`;

export const Username = styled.p`
  margin: 32px 0 0 0;

  font-family: var(--main-font);
  font-weight: bolder;

  color: var(--text-color);

  :hover {
    color: var(--accent);
    cursor: pointer;
  }
`;
export const Tag = styled.p`
  margin: 16px 0 0 0;
  color: var(--main-color);
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
  width: 100%;
  display: flex;
  align-items: center;
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 700;
  background-color: var(--profile-stats-bgc);
`;

export const Item = styled.li`
  width: 33.333%;
  display: flex;
  flex-direction: column;
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
