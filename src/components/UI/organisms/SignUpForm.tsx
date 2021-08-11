import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, ColumnContainer } from '../atoms';
import { InputBox, InputBoxButton } from '../molecules';
import { idDuplicate, nickNameDuplicate, signUp } from '../../../repo/auth';

function SignUpForm() {
  const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[!-~₩]{8,16}$/);

  const history = useHistory();

  const idInput = useRef<HTMLInputElement>(null);
  const nickNameInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);
  const confrimPwInput = useRef<HTMLInputElement>(null);

  const [dupID, setDupId] = useState(false);
  const [dupNickName, setDupNickName] = useState(false);

  const dupIdBtnClicked = () => {
    if (idInput.current && idInput.current.value) {
      idDuplicate({ id: idInput.current.value }).then((d) => {
        if (d.data) {
          alert('사용가능한 아이디입니다.');
        } else {
          alert('사용불가능한 아이디입니다.');
          if (idInput.current) {
            idInput.current.value = '';
          }
        }
        setDupId(d.data);
      });
    } else {
      alert('아이디를 입력하세요');
    }
  };

  const dupNickNameBtnClicked = () => {
    if (nickNameInput.current && nickNameInput.current.value) {
      nickNameDuplicate({ nickName: nickNameInput.current.value }).then((d) => {
        if (d.data) {
          alert('사용가능한 닉네임입니다.');
        } else {
          alert('사용불가능한 닉네임입니다.');
          if (nickNameInput.current) {
            nickNameInput.current.value = '';
          }
        }
        setDupNickName(d.data);
      });
    } else {
      alert('닉네임을 입력하세요');
    }
  };

  const confirmPw = () => {
    if (pwInput.current && confrimPwInput.current)
      return pwInput.current.value === confrimPwInput.current.value;
    return false;
  };

  const onBtnClicked = () => {
    if (!(idInput.current && idInput.current.value)) {
      alert('아이디를 입력하세요.');
      return;
    }

    if (!(nickNameInput.current && nickNameInput.current.value)) {
      alert('닉네임을 입력하세요.');
      return;
    }

    if (!dupID) {
      alert('아이디 중복확인을 해주세요.');
      return;
    }

    if (!dupNickName) {
      alert('닉네임 중복확인을 해주세요.');
      return;
    }

    if (!(pwInput.current && pwInput.current.value)) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    if (!regExp.test(pwInput.current.value)) {
      alert('비밀번호를 확인하세요.');
      return;
    }

    if (!confirmPw()) {
      alert('비밀번호가 일치하지 않습니다.');
      if (confrimPwInput.current) confrimPwInput.current.value = '';
      return;
    }

    const payload = {
      accountId: idInput.current.value,
      adminCode: '',
      nickName: nickNameInput.current.value,
      password: pwInput.current.value,
    };

    signUp(payload, 'ROLE_USER').then((d) => {
      console.log(d);
      history.replace('/');
    });
  };

  return (
    <ColumnContainer>
      <InputBoxButton
        text="아이디"
        btnText="중복확인"
        iRef={idInput}
        onClick={dupIdBtnClicked}
      />
      <InputBoxButton
        text="닉네임"
        btnText="중복확인"
        iRef={nickNameInput}
        marginBottom="10px"
        onClick={dupNickNameBtnClicked}
      />
      <InputBox
        type="password"
        text="비밀번호 (영문,숫자,특수문자가 포함, 8~16자 이내)"
        iRef={pwInput}
        marginBottom="10px"
      />
      <InputBox
        type="password"
        text="비밀번호 확인"
        iRef={confrimPwInput}
        marginBottom="40px"
      />
      <Button width="380px" onClick={onBtnClicked}>
        회원가입
      </Button>
    </ColumnContainer>
  );
}

export default SignUpForm;
