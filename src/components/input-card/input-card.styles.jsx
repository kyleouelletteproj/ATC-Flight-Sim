import Colors from 'components/styles/colors';
import styled from 'styled-components';

export const InputCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${Colors.textSecondary};
  width: 100%;
  height: 30px;
  margin-top: 0px;
  border-radius: 12px;
  background-color: ${Colors.buttonSecondary};
  margin-bottom: 4px;
`;

export const SuccessWrapper = styled.div`
    color: white;
    background-color: green;
    height: 22px;
    margin-right: 12px;
    border-radius: 50%;
    padding-right: 8px;
    padding-left: 8px;
`;

export const FailWrapper = styled.div`
    color: white;
    background-color: red;
    height: 22px;
    margin-right: 12px;
    border-radius: 50%;
    padding-right: 8px;
    padding-left: 8px;
`;

export const TextWrapper = styled.div`
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 12px;
    width: 100%;
`;