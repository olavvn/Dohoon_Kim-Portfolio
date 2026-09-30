import type {
  Activity,
  ArchiveProject,
  Certificate,
  Experience,
  Project,
} from "@/types/portfolio";

export const profile = {
  name: "김도훈",
  englishName: "Dohoon Dawn Kim",
  role: "AI · Data Engineer",
  headline: "AI를 실험에서 끝내지 않고, 실제로 운영되는 시스템까지 연결합니다.",
  introduction:
    "센서 데이터 파이프라인부터 LLM 에이전트, 관측 가능한 클라우드 인프라까지 설계하고 구현합니다. 기술을 선택할 때는 새로움보다 문제의 제약과 운영 이후를 먼저 봅니다.",
  email: "kimdohun3554@gmail.com",
  github: "https://github.com/olavvn",
  linkedin: "https://www.linkedin.com/in/olavvn78/",
  education: [
    "서강대학교 아트&테크놀로지학 · 컴퓨터공학 복수전공",
    "2020.02 — 재학 중",
  ],
};

export const projects: Project[] = [
  {
    id: "safe-whale",
    eyebrow: "AI ENGINEERING · DEPLOYMENT",
    title: "안전고래",
    period: "2026.04 — 2026.09",
    summary:
      "사진과 대화를 기반으로 교내 안전 신고서를 작성하는 AI 에이전트와 운영 기반을 구축했습니다.",
    media: [
      {
        type: "image",
        src: "/media/safe-whale-langfuse.jpg",
        alt: "안전고래 AI 에이전트의 Langfuse 관측 화면",
      },
      {
        type: "image",
        src: "/media/safe-whale-demo.gif",
        alt: "안전고래 안전 신고 서비스 데모",
      },
      {
        type: "image",
        src: "/media/safe-whale-langfuse-demo.gif",
        alt: "안전고래 Langfuse 추적 데모",
      },
    ],
    metrics: ["사용자 긍정 평가 80%", "전체 흐름 20–25초", "첫 질문 약 7.3초"],
    problem:
      "안전 위해 요소를 신고할 때마다 공문서 형식의 보고서를 직접 작성해야 했고, 사진 판독부터 담당 부서 분류까지 여러 판단이 필요했습니다.",
    contributions: [
      "사진 판독, 확인 질문, 부서 분류, 신고서 작성, 인사이트 생성 흐름을 FastAPI 기반 5개 API로 분리했습니다.",
      "비식별 재해 조사 의견서 12건으로 행정 문체 RAG를 만들고 JSON 스키마 검증과 답변 반영 검사를 적용했습니다.",
      "프롬프트를 YAML로 버전 관리하고 Langfuse에서 실행 경로, 비용, 지연, 품질 점수를 추적했습니다.",
      "GitHub Actions, GHCR, Docker Compose, Nginx를 이용해 EC2 배포와 서비스 격리를 구성했습니다.",
    ],
    results: [
      "사진 판독부터 신고서 재생성과 인사이트 제공까지 하나의 에이전트 흐름으로 연결했습니다.",
      "30명 사용자 테스트에서 80%의 긍정 평가를 확보했습니다.",
      "배포 후에도 프롬프트별 품질과 비용, 지연을 추적할 수 있는 운영 기반을 마련했습니다.",
    ],
    stack: ["Python", "FastAPI", "Gemini", "RAG", "Langfuse", "Docker", "AWS EC2", "GitHub Actions"],
    links: [
      { label: "GitHub Organization", href: "https://github.com/SafeWhaleArtechSogang" },
      { label: "AI Repository", href: "https://github.com/SafeWhaleArtechSogang/ai-server" },
    ],
  },
  {
    id: "orai",
    eyebrow: "DATA ENGINEERING · AIOPS",
    title: "O’RAI",
    period: "2026.06 — 2026.08",
    summary:
      "라이브 커머스의 사용자 체감 이상까지 감지하는 이벤트 파이프라인과 AIOps 관측 시스템을 설계했습니다.",
    media: [
      {
        type: "image",
        src: "/media/orai-architecture.png",
        alt: "O’RAI 서비스 전체 아키텍처",
      },
      {
        type: "image",
        src: "/media/orai-observability.png",
        alt: "O’RAI 관측 데이터 아키텍처",
      },
      {
        type: "image",
        src: "/media/orai-datadog.gif",
        alt: "O’RAI Datadog 대시보드 데모",
      },
    ],
    metrics: ["10초 단위 집계", "Hot · Warm · History", "6종 장애 시나리오"],
    problem:
      "인프라 지표만으로는 재시도, 취소, Fallback, Tail Latency처럼 사용자가 실제로 겪는 이상을 빠르게 구분하기 어려웠습니다.",
    contributions: [
      "Kinesis 수집에서 Firehose·S3·Glue 장기 저장과 Lambda·DynamoDB 실시간 집계로 이어지는 이중 경로를 구축했습니다.",
      "Sequence Number와 조건부 쓰기로 재처리 시 중복 집계를 막고 저장 한도에 맞춘 병합형 통계 스케치를 설계했습니다.",
      "인프라, APM, 비즈니스 지표를 통합한 Datadog 대시보드와 Monitor를 Terraform으로 관리했습니다.",
      "Agent가 동일 시점의 지표와 배포 이력을 조회하도록 DETECT, PRE, POST 스냅샷 인터페이스를 연계했습니다.",
    ],
    results: [
      "수집, 집계, 장기 저장, 모니터링, AI Agent 입력까지 이어지는 관측 데이터 파이프라인을 완성했습니다.",
      "복합 지표로 장애 원인을 구분하고 데이터 미수집 자체도 감시하도록 구성했습니다.",
    ],
    stack: ["AWS Kinesis", "Lambda", "DynamoDB", "S3", "Glue", "Datadog", "Terraform", "Kubernetes"],
    links: [{ label: "GitHub Organization", href: "https://github.com/CJ-AI-Cloud-Wave" }],
  },
  {
    id: "netlog",
    eyebrow: "PLATFORM · CLOUD",
    title: "NETLOG",
    period: "2026.03 — 2026.06",
    summary:
      "폐어망 수거부터 업사이클링 공정까지 하나의 Trace ID로 연결하는 현장 중심 추적 플랫폼입니다.",
    media: [
      {
        type: "image",
        src: "/media/netlog-dashboard-1.gif",
        alt: "NETLOG 공정 관리 대시보드 첫 번째 데모",
      },
      {
        type: "image",
        src: "/media/netlog-dashboard-2.gif",
        alt: "NETLOG 공정 관리 대시보드 두 번째 데모",
      },
      {
        type: "image",
        src: "/media/netlog-inspector-1.gif",
        alt: "NETLOG 검수자 작업 화면 첫 번째 데모",
      },
      {
        type: "image",
        src: "/media/netlog-inspector-2.gif",
        alt: "NETLOG 검수자 작업 화면 두 번째 데모",
      },
      {
        type: "image",
        src: "/media/netlog-animation.gif",
        alt: "NETLOG 폐어망 추적 과정 애니메이션",
      },
    ],
    metrics: ["기록 시간 30% 단축", "폐어망 추적률 약 80%", "피크 시간 3대 확장"],
    problem:
      "수거 기록이 수기로 관리되어 유실이 잦았고, 공정에 투입된 폐어망의 원산지를 결과물까지 추적하기 어려웠습니다.",
    contributions: [
      "현장 담당자 인터뷰를 바탕으로 모바일 수거 앱과 공정 관리 웹을 잇는 데이터베이스를 설계했습니다.",
      "마대 단위 Trace ID와 선입선출 적재 규칙으로 원료 추적성을 확보했습니다.",
      "Railway 시연 환경을 EC2와 RDS로 이전하고 수거 집중 시간에 예약 오토스케일링을 적용했습니다.",
    ],
    results: [
      "사용자 테스트에서 수기 대비 기록 시간을 약 30% 줄였습니다.",
      "실험 기간 전체 폐어망의 약 80%를 디지털 기록으로 추적했습니다.",
    ],
    stack: ["AWS EC2", "RDS", "Auto Scaling", "Railway", "Database Design"],
    links: [{ label: "GitHub Organization", href: "https://github.com/FORSEA-NETLog" }],
  },
  {
    id: "anchorflow",
    eyebrow: "GENERATIVE AI · REAL-TIME",
    title: "AnchorFlow",
    period: "2026.03 — 2026.06",
    summary:
      "Transformer가 생성하는 MIDI를 끊김 없이 재생하고 시각화하는 실시간 앰비언트 음악 머신입니다.",
    media: [
      {
        type: "image",
        src: "/media/anchorflow-demo.gif",
        alt: "AnchorFlow 실시간 음악 생성과 피아노롤 데모",
      },
    ],
    metrics: ["생성 속도 1.15×", "과목 Best Work", "앰비언트 100곡 채보"],
    problem:
      "자기회귀 음악 생성 속도가 실제 재생 시간을 따라가지 못하면 빈 버퍼와 음표 중첩이 발생해 연속 재생이 무너졌습니다.",
    contributions: [
      "100곡을 MIDI로 구축하고 장르 특성에 맞는 TSD 토크나이저로 전처리했습니다.",
      "생성과 재생을 분리한 멀티스레드 구조, 사전 버퍼, 백프레셔, wall-clock 스케줄러를 구현했습니다.",
      "문법 로짓 마스킹과 최소 Time-Shift로 음악 시간이 항상 실시간보다 앞서도록 보장했습니다.",
      "모델 서버와 웹 서버를 분리하고 Redis 큐를 통해 추론이 웹 요청을 막지 않게 했습니다.",
    ],
    results: [
      "생성 속도를 1.15배로 높이고 지연된 음표가 한꺼번에 재생되는 문제를 해결했습니다.",
      "피아노롤과 실제 MIDI 재생의 시계를 일치시켜 안정적인 연속 스트리밍을 구현했습니다.",
    ],
    stack: ["Python", "PyTorch", "Transformer", "MIDI", "Flask", "Redis", "Docker", "AWS EC2"],
    links: [
      { label: "GitHub Repository", href: "https://github.com/dawndohoonkim/AnchorFlow-realtime-ambient-machine" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "(주)에프알티로보틱스",
    role: "Data Engineer Intern · 연구그룹",
    period: "2026.03 — 2026.06",
    summary: "웨어러블 로봇의 100Hz 센서 원본을 재현 가능한 딥러닝 학습 데이터로 전환했습니다.",
    highlights: [
      "모터·IMU·압력 센서의 수집, 파싱, 시간 동기화, 신호 전처리, HDF5 배포 파이프라인 구축",
      "원본 바이너리부터 학습 피처까지 4계층 S3 데이터 레이크와 전처리 버전 경로 설계",
      "설정값 해시 기반 버전 생성으로 기준 변경 시 원본 재수집 없이 데이터 재생성",
      "비동기 수집 구조로 100Hz 로봇 제어 루프와 데이터 전송·AI 추론을 분리",
    ],
    stack: ["Python", "AWS S3", "HDF5", "Signal Processing", "TCP/IP", "Edge AI"],
  },
  {
    company: "KIC 실리콘밸리",
    role: "Program Operations Intern",
    period: "2025.08 — 2025.12",
    summary: "비정형 기업 자료를 공통 지표로 정리하는 LLM 기반 평가 대시보드를 개발했습니다.",
    highlights: [
      "민감 정보 보호를 고려해 AWS Bedrock으로 기업 자료의 핵심 지표 추출",
      "기업별 제출 포맷을 정규화하고 비교 가능한 평가 대시보드로 시각화",
      "평균 심사 시간을 30% 단축하고 사내 기업 서류 평가의 표준 절차로 정착",
    ],
    stack: ["AWS Bedrock", "LLM", "Dashboard", "Data Normalization"],
  },
  {
    company: "독재자 재수학원",
    role: "Founding Member · Tutor",
    period: "2024.01 — 2025.07",
    summary: "창립 단계의 운영 절차를 정리하고 학생 통합 관리 웹사이트 출시를 기획했습니다.",
    highlights: [
      "멘토링 기록 템플릿과 주간 점검 절차를 도입해 튜터 간 인수인계 체계 구축",
      "6개월간 운영한 출결 관리 문서를 바탕으로 출결·수납·지문 인식 요구사항 명세",
      "운영자와 외주 개발사 사이의 요구사항을 조율해 기획 후 2개월 만에 웹사이트 출시",
    ],
  },
];

export const skills = {
  core: ["Python", "TypeScript", "JavaScript", "SQL", "C"],
  aiData: ["PyTorch", "LLM", "RAG", "FastAPI", "HDF5", "Signal Processing"],
  cloudOps: ["AWS", "Docker", "Kubernetes", "Terraform", "Datadog", "GitHub Actions"],
  storage: ["PostgreSQL", "DynamoDB", "Redis", "S3", "Kinesis", "Glue"],
};

export const certificates: { language: Certificate[]; it: Certificate[] } = {
  language: [
    { name: "TOEFL iBT", issuer: "ETS", acquired: "2025.06", detail: "99 / 120 · CEFR C1" },
    { name: "TOEIC Speaking", issuer: "ETS", acquired: "2026.05", detail: "160 / 200 · AL" },
  ],
  it: [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", acquired: "2026.09" },
    { name: "SQL 개발자 (SQLD)", issuer: "한국데이터산업진흥원", acquired: "2026.03" },
  ],
};

export const activities: Activity[] = [
  {
    title: "GDGoC · ML Core Member",
    period: "2025.03 — 2025.08",
    description: "LLM 애플리케이션 스터디를 운영하며 프롬프트 엔지니어링, RAG, Function Calling, MCP 실습을 진행했습니다.",
  },
  {
    title: "헤이트슬롭 · 생성형 AI 학회",
    period: "2024.09 — 2025.07",
    description: "향수 추천 시스템과 캐릭터 챗봇 프로젝트를 수행하고, 2기 운영진으로 Hugging Face 교육 세션을 운영했습니다.",
  },
  {
    title: "서광회 · 중앙사진동아리",
    period: "2021.06 — 2025.02",
    description: "중단되었던 암실을 재정비하고 현상·인화 매뉴얼과 교육을 운영해 5년 만의 아날로그 신인전을 함께 만들었습니다.",
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    title: "Character Chatbot Service",
    period: "2025.03 — 2025.04",
    description: "캐릭터성을 부여하고 프롬프트 공격을 방어하는 시스템 프롬프트와 RAG 기반 챗봇 UI를 개발했습니다.",
    tags: ["NLP", "HCI", "Python", "JavaScript"],
    links: [{ label: "Notion", href: "https://www.notion.so/1d99451bfd928049a9a9cac5f115bc29" }],
  },
  {
    title: "What’s in My Scent?",
    period: "2025.01 — 2025.02",
    description: "STS 모델과 GPT 데이터 증강, 벡터 검색을 결합한 향수 추천 시스템입니다.",
    tags: ["NLP", "Recommendation", "Python"],
    links: [{ label: "Notion", href: "https://www.notion.so/1d99451bfd92802596e8cd35f5eeebde" }],
  },
  {
    title: "Pour Monsieur",
    period: "2024.12",
    description: "남성 향수 커뮤니티를 주제로 제작한 웹 디자인 프로토타입입니다.",
    tags: ["HCI", "Web Design", "HTML/CSS"],
    links: [{ label: "Live", href: "https://olavvn.github.io/pour_monsieur_web/" }],
  },
  {
    title: "Doppelganger Chatbot",
    period: "2024.05 — 2024.06",
    description: "개인 대화 데이터로 koGPT2를 파인튜닝해 말투를 모방하는 챗봇을 만들었습니다.",
    tags: ["NLP", "koGPT2"],
    links: [
      { label: "GitHub", href: "https://github.com/olavvn/Doppelganger-Chatbot" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=IaK1MpSbA1s" },
    ],
  },
  {
    title: "Word2Vec for Fragrance Mapping",
    period: "2024.03",
    description: "향수 노트를 Word2Vec으로 벡터화해 유사한 향의 군집을 탐색했습니다.",
    tags: ["NLP", "Word2Vec"],
    links: [{ label: "GitHub", href: "https://github.com/olavvn/Word2Vec_for_Fragrance_Mapping" }],
  },
  {
    title: "Accessible Museum Guide",
    period: "2024.03",
    description: "시각장애인의 전시 관람을 위해 생성형 AI 스크립트와 TTS를 활용한 오디오 가이드를 설계했습니다.",
    tags: ["HCI", "Accessibility", "Team"],
    links: [{ label: "Poster", href: "https://drive.google.com/file/d/1PtxVgA622GlJH8i_qlYUu_3cXFOSgQ97/view" }],
  },
  {
    title: "Merry Christmas",
    period: "2023.11 — 2023.12",
    description: "컴퓨터 글리치를 소재로 제작한 미디어 파사드 작업입니다.",
    tags: ["Media Arts", "p5.js"],
    links: [
      { label: "GitHub", href: "https://github.com/olavvn/Merry-Christmas" },
      { label: "Demo", href: "https://editor.p5js.org/kony/full/lnY0FuCkM" },
    ],
  },
  {
    title: "No.5 Chronology",
    period: "2023.11 — 2023.12",
    description: "Chanel No.5 광고의 연대기를 통해 디지털화를 비평한 에세이 필름입니다.",
    tags: ["Media Arts", "Film", "Team"],
    links: [{ label: "Watch", href: "https://www.youtube.com/watch?v=XNOpV5DeMPI" }],
  },
  {
    title: "Long Day’s Journey into Night",
    period: "2024.03",
    description: "동명의 희곡에 오마주를 보낸 실험 영화에서 조감독을 맡았습니다.",
    tags: ["Film", "Assistant Director"],
    links: [],
  },
];
