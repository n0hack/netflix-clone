import Input from "@/components/Input";
import Image from "next/image";
import React, { useReducer, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 및 회원가입 화면 전환을 관리하는 상태
  const [isLoginVariant, toggleVariant] = useReducer((v) => !v, true);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpeg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image width="148" height="40" src="/images/logo.png" alt="로고" />
        </nav>
        <div className="flex justify-center">
          <div className="mt-2 w-full self-center rounded-md bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {isLoginVariant ? "로그인" : "회원가입"}
            </h2>
            <div className="flex flex-col gap-4">
              {!isLoginVariant && (
                <Input
                  id="name"
                  label="사용자 이름"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                label="이메일 주소"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                label="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700">
              {isLoginVariant ? "로그인" : "회원가입"}
            </button>
            <p className="mt-12 text-neutral-500">
              {isLoginVariant
                ? "Netflix 회원이 아닌가요?"
                : "이미 가입하신 회원인가요?"}{" "}
              <span
                onClick={toggleVariant}
                className="ml-1 cursor-pointer text-white hover:underline"
              >
                {isLoginVariant ? "지금 가입하세요." : "로그인하기"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
