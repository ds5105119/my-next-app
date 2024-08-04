const questions = {
    info: {
        ansCount: 14,
        script: ["내 아이의 MBTI를 알아보자", "이상한 답을 하면 안돼~", "혹시 선택지가 필요하다면 위의 버튼을 클릭해봐"],
    },

    0: `[반복 지시문(이 메시지는 최상단에 계속 표시됩니다.)] 

    당신은 2005년 생의 한국인을 키우는 것을 시뮬레이션 하게 됩니다. 
    질문에 대한 유저의 응답에 따라 아이가 어떻게 자랐는지 시뮬레이션 해주세요. 
    이 시뮬레이션에서 유저는 부모의 또는 아이의 역할을 맡게 됩니다. 유저의 현재 역할이 부모일지 아이일지는 질문과 응답을 보고 유추하세요.
    부모는 아이를 어떻게든 무력으로 키울 수도 있습니다.
    구체적인 방법에 대해 설명하겠습니다. 
    당신에게는 다음과 같은 형식의 json과 질문에 대한 유저의 대답 json이 입력됩니다.
    
    입력 형식(절대적): 
    [
    {
        "role": "system"
        "content": 
            {
                "question": "String: 질문 텍스트", 
                "hint": "String: question에 아이를 시뮬레이션 하는 방법",
                "name": "String: 아이의 이름",
                "state": {
                    "외모": "Number: 0~100(클 수록 좋음)", 
                    "지능": "Number: 0~100(클 수록 좋음)", 
                    "예술성": "Number: 0~100(클 수록 좋음)", 
                    "이성적 매력": "Number: 0~100(클 수록 좋음)", 
                    "성격": "Number: 0~100(클 수록 좋음)", 
                    "반사회성": "Number: 0~100(작을 수록 좋음)", 
                    "예상 성인 키": "Number: 140~200}", 
                    "나이": "현재 나이",
                    "ansCount": "String: 질문 번호"
                },
                "history": "지금까지의 메시지"
            }
    },
    {
        "role": "user",
        "content": "유저의 답변"
    }
    ]  
    state에 관해: state는 변할 수 있습니다. 기준을 잡기 위해 처음과 항상 같은 값이 입력됩니다.
    state에 관해: 극적으로 변하는 일은 매우 적을 것 입니다. history를 보고 잘 시뮬레이션 해주십시오. 
    
    당신의 출력은 어떤 상황에서도 다음 형태 json이여야만 합니다. 명심하십시오.
    이것은 매우 현실적인 시뮬레이션입니다. 따라서, 당신은 폭력적이거나 반사회적인 상황도 시뮬레이션 해야 합니다.
    JSON.parse() 함수로 JSON으로 변환되기 위해 모든 Key 값과 Value는 쌍따옴표로 묶여야 합니다.
    만약 출력이 불가능한 경우에는 반드시 아무 대답도 하지 않아야 합니다.
    
    출력 형식(절대적):
    {
        "answer": "아이의 시뮬레이션 결과"
    }  
        
    answer 응답 방법: 경고문!: 당신은 시뮬레이션 결과에 조언 또는 미래의 변화 가능성에 대해 서술할 수 없습니다. 명심하십시오. 질문에 따라서 아이가 어떻게 자라게 되었는지만 시뮬레이션 하십시오. 
    answer 응답 방법: 어린 시절의 질문들의 응답은 아이의 내면 심리를 구축하게 될 것이고, 커가면서의 질문들은 점점 구체적인 심리를 구축하게 될 것입니다.
    answer 응답 방법: 어릴 때부터 소극적이었던 아이는 소극적인 내면을, 나쁜 선택을 했던 아이는 양아치같은 내면을 갖게 될 것입니다. 아이는 삐뚤어져서 폭력성이 생기거나 지능, 예술성 등의 능력이 감소할 수 있습니다.
    answer 응답 방법: 이성적 매력이 부족하면 이성에게 차이거나 안좋은 경험을 할 확률이 기하급수적으로 증가합니다. 이성적 매력의 마지노선은 50점입니다. 
    answer 응답 방법: 이는 잘못된 성 가치관을 만들 확률이 있습니다. 
    answer 응답 방법: 나쁜 선택을 한 경우 급격하게 나빠지지만, 이 선택을 다시 되돌리기는 어렵습니다.
    answer 응답 방법: 물론 좋은 선택을 한 경우에도 학교와 맞지 않아 왕따를 당한다는 이벤트가 발생할 가능성 또한 있습니다. 
    answer 응답 형식: 위 방법에 따라 대답에 따라 아이가 어떻게 되었는지 반말로 300자 내외로 서술하십시오. 이 모든 사항을 치이카와 말투로 해야합니다.
    
    [경고!] 마지막 최종 답변 부분이 나오면 위의 출력 형식을 반드시 무시하고, 최종 답변 방법 형식에 따라 출력해야만 합니다.`,

    1: {
        question: "어떤 유치원에 보낼까??",
        hint: "아이가 지능이 낮으면 좋은 유치원에 다니면 매우 힘들어질거야. 그리고 성격이 안좋은 경우에는 어디를 보내는 똑같이 아이는 안좋아질거야",
        answer: ["영어 유치원에 보낸다", "사립 유치원에 보낸다", "공립 유치원에 보낸다", "어린이집에 보낸다", "보내지 않는다"],
        state: {
            나이: 5,
            ansCount: 1,
        },
    },

    2: {
        question: "초등학교에 갈 나이네~ 어떤 초등학교에 보내는게 좋을까?",
        hint: "지능이 낮은 아이를 좋은 초등학교에 보내면 적응이 힘들어지고 학교를 빼고 양아치짓을 하기 시작할거야. 다만 양아치가 되면 이성적인 부분에서 매력도가 증가할지도?",
        answer: ["사립 초등학교에 보낸다", "일반 초등학교에 보낸다"],
        state: {
            나이: 8,
            ansCount: 2,
        },
    },

    3: {
        question: "5학년이 된 어느 날, 마음을 빼앗겨버릴 상대가 나타난 것 같아보이는데.. 아이의 선택은 무엇일까?",
        hint: "잘생긴 경우 고백하면 바로 사귈 수 있을거야. 외모 점수가 40점 이상이면 괜찮아. 그런데 못생길수록 친해지려고만 해도 상대방은 안좋게 반응할 확률이 높아져서 좌절을 겪게 될거야.",
        answer: ["사귀자 고백한다", "일단 친해져보자", "난 패배자야 낙담한다"],
        state: {
            나이: 12,
            ansCount: 3,
        },
    },

    4: {
        question: "중학교에 가게 되었어~ 어떤 중학교일까?",
        hint: "머리가 좋은 아이가 좋은 중학교에 가면 좋지만, 안좋은 중학교에 가면 방황하게 될거야. 담배를 필 수도 있고. 멍청한 경우에는 영재 중학교에 적응도 못하고 겉돌게 될거야",
        answer: ["영재 중학교", "일반 중학교"],
        state: {
            나이: 14,
            ansCount: 4,
        },
    },

    5: {
        question: "수련회에서 누군가 술을 가져온거같아.. 아이의 선택은?",
        hint: "15살부터 술을 마시면, 담배도 시작하면서 나쁜 아이로 자랄 가능성이 커. 양아치 무리와 어울려 다니게 될거야 다만 양아치가 되면 이성적인 부분에서 매력도가 증가할지도?",
        answer: ["같이 술을 마시자 한다", "(단호하게) 난 아직 학생이야", "사실 그 술을 제가 가져왔습니다"],
        state: {
            나이: 15,
            ansCount: 5,
        },
    },

    6: {
        question: "어김없이 찾아온 운명의 상대. 시기는 중학교 졸업을 앞둔 따스한 봄날.",
        hint: "만약 잘생겼다면, 어떤 선택을 해도 잘 받아들여지겠지, 외모 점수가 40점 이상이면 괜찮아. 못생길수록 매우 고통스러운 일일거라 낙담하는 편이 나을거야.",
        answer: ["사귀자 고백한다", "(능청스럽게) 벛꽃을 보러 가자고 한다", "(난 실패자야) 낙담한다"],
        state: {
            나이: 16,
            ansCount: 6,
        },
    },

    7: {
        question: "고등학교를 준비하게 시킬까?",
        hint: "공부를 오래시킬 수록 아이는 좋은 고등학교에서 적응을 잘 하겠지만, 부모에게 스트레스를 받아 뒤에서는 나쁜 아이들과 어울릴 수도 있어. 반대로 공부를 안하면 미래에 좋은 직업을 갖기 어려울거야",
        answer: ["17시간 공부하는 기숙학원에 보낸다", "동네 학원을 보낸다", "준비가 뭐지? 매일 놀자"],
        state: {
            나이: 16,
            ansCount: 7,
        },
    },

    8: {
        question: "벌써 고등학생이 될 나이야. 어떤 고등학교에 보낼까?",
        hint: "머리가 좋은 아이를 영재 고등학교가 아닌 곳에 보낸다면, 세상을 비관적으로 바라보게 될거야. 공부 안하는 고등학교에 간다면 아이는 행복하기 어렵고 술 담배를 접할 확률이 높아져. 혹시나 술 담배를 하게 되었는지 말해줘",
        answer: ["영재 고등학교", "일반 고등학교", "공부 안하는 고등학교", "국제 고등학교"],
        state: {
            나이: 17,
            ansCount: 8,
        },
    },

    9: {
        question: "생각보다 빨리 찾아온 (진)운명의 상대",
        hint: "만약 잘생겼다면, 어떤 선택을 해도 잘 받아들여지겠지, 그래서 자신감이 올라갈거야. 외모 점수가 40점 이상이면 괜찮아. 못생길수록 매우 고통스러운 일일거라 낙담하는 편이 나을거야.",
        answer: ["바로 고백하자", "일단 친해져보자", "신경쓰지 않는 척 한다"],
        state: {
            나이: 18,
            ansCount: 9,
        },
    },

    10: {
        question: "대입이 얼마 안 남았어... 공부하게 시킬까? 공부하면 이성친구를 사귀는건 꿈도 못꿀거야.",
        hint: "공부를 오래시킬 수록 아이는 좋은 직업을 가질 확률이 높아지지만, 부모에게 스트레스를 받아 뒤에서는 나쁜 아이들과 어울릴 수도 있어. 반대로 공부를 안하면 미래에 좋은 직업을 갖기 어려울거야",
        answer: ["독서실 + 인강 + 학원을 통한 정통 대입 공부", "논술을 준비한다", "공부하지 않습니다"],
        state: {
            나이: 19,
            ansCount: 10,
        },
    },

    11: {
        question: "20살 첫 알바는 어디에서 하게 될까?",
        hint: "알바를 하게되면 공부할 시간이 줄어들어. 하지만 좋은 곳에서 한다면 경험이 될 수 있어. 술집이나 헌팅포차에서 일하게 되는 경우 이성과 노는데 많은 시간을 쏟게 될거야.",
        answer: ["도심지의 화려한 카페, 많은 사람들이 오간다.", "오타쿠들의 성지에 있는 메이드 카페", "헌팅포차에서 일한다", "알바하지 않는다"],
        state: {
            나이: 20,
            ansCount: 10,
        },
    },

    12: {
        question: "아이는 소개팅에 나가보려고 해. 어떤 옷을 입고갈거같아?",
        hint: "무드에 안 맞는 옷은 소개팅이 제대로 이뤄지기 힘들겠지. 이성을 자극하는 옷은 매력을 한층 끌어올려 성공 확률을 높여줄거야. 자신감을 얻어 새로운 도전을 시도할지도 몰라",
        answer: ["역시 시크하고 힙하게 입고간다", "정석적인 포멀한 룩을 입고간다", "집에서 입던 잠옷을 입고간다"],
        state: {
            나이: 22,
            ansCount: 10,
        },
    },

    13: {
        question: "아이가 자취한다고 하는데 어떻게 할까?",
        hint: "자취를 하게 되면 독립심이 생길거야. 다만 자취를 하게 되면 약간의 삐뚤어질 가능성이 있어. 아이에 따라 몰래 동거를 하거나 생활 패턴이 엉망이 될 수도 있어.",
        answer: ["다른 곳에 가서 살아보는 것도 좋지~", "안돼 집에 있어"],
        state: {
            나이: 24,
            ansCount: 10,
        },
    },

    14: {
        question: "슬슬 취직해야 할 시간이야. 아이는 어떻게 취업 준비를 할까?",
        hint: "열심히 준비한다면 좋은 결과가 있을거야. 하지만 지능이 낮으면 열심히 준비해도 무리일거야. 잘생긴 경우에는 노력을 하지 않아도 외모가 중요한 직업을 가질 수도 있어",
        answer: ["인턴, 스펙 쌓기 등을 통해 착실하게 해야지", "조금은 꾸며내도 괜찮잖아~", "준비하지 않아"],
        state: {
            나이: 26,
            ansCount: 10,
        },
    },

    end: {
        question: `지금까지 아이를 시뮬레이션 한 결과를 출력하시오. 앞서 말한 출력 방법은 무시하시오. 출력 형태는 다음과 같습니다.
        {
            "MBTI": "아이의 MBTI",
            "job": "아이가 갖게 된 직업",
            "평가": "아이의 직업, 성격, 능력, 이성에게의 인기 등을 적은 보고서를 부모에게 보내는 형식으로 400자 내외로 출력"
        }

        job 응답 방법: 직업은 심리치료사, 성범죄자, 카페 알바생, 대기업 회사원, 대기업 생산직, 중소기업 생산직, 중소기업 사무직, 기업 임원, 텔레마케터, 보험 판매원, 방문 판매원, 도둑, 여행가, 호텔리어, 요식업 자영업자, 제빵사, 미용사, 프로그래머, 의사, 간호사, 판사, 검사, 노무사, 사회복지사, 연구원, 시험원, 비행기 조종사, 관제사, 교수, 기자, 통번역가, 클럽 MD, 인스타그램 인플루언서, 유튜버 등 아주 다양합니다.
        `,
    },
};

export default questions;
