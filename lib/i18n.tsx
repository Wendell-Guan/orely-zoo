"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "zh";

export const dict = {
  en: {
    brand: "ORELY EXOTICS",
    tagline: "Rare & Exotic Pets",
    nav: { home: "Home", about: "About", shop: "Shop", species: "Species", contact: "Contact" },
    hero: {
      title1: "FIND YOUR",
      title2: "EXOTIC COMPANION!",
      sub: "Browse rare and ethically-sourced exotic pets, delivered with full care guidance.",
      category: "Category",
      categoryOptions: ["Reptiles", "Parrots", "Small Mammals", "Aquatic", "Arachnids"],
      region: "Region",
      regionOptions: ["Shipping: US", "Shipping: EU", "Shipping: Asia", "Pickup In-Store"],
      budget: "Budget",
      budgetOptions: ["Under $200", "$200 – $1,000", "$1,000 – $5,000", "$5,000+"],
      cta: "Shop Now",
      searching: "Searching",
      resultsFor: "matches for",
    },
    stories: [
      { kicker: "ORELY EXOTICS", t1: "RARE SPECIES", t2: "MARKETPLACE", body: "Orely Exotics is a curated marketplace for rare and exotic pets. We source reptiles, parrots, small mammals, and aquatic species only from licensed, ethical breeders who meet our strict welfare standards." },
      { kicker: "ORELY EXOTICS", t1: "LIVE ARRIVAL", t2: "& HEALTH GUARANTEE", body: "Every animal ships with temperature-controlled overnight delivery and a full live-arrival guarantee. Our in-house vets screen each pet, and you receive a health certificate, feeding plan, and habitat checklist before it leaves the facility." },
      { kicker: "ORELY EXOTICS", t1: "ETHICAL SOURCING", t2: "& LIFETIME SUPPORT", body: "No wild-caught animals — ever. We verify breeder permits, publish lineage records, and support every buyer with lifetime care consultations so your exotic companion thrives for years to come." },
    ],
    pricing: {
      title: "PACKAGES & PRICING",
      sub: "Choose the bundle that fits your experience level — each includes the pet, habitat, and ongoing support.",
      perBundle: "/bundle",
      plans: [
        { name: "STARTER",   price: 199,  items: ["Beginner-Friendly Species", "Basic Habitat Kit", "Feeding Starter Pack", "30-Day Health Guarantee", "Free Care Guide"] },
        { name: "PREMIUM",   price: 499,  items: ["Rare Morph Selection", "Full Habitat Setup", "3-Month Food Supply", "90-Day Health Guarantee", "Overnight Shipping", "Vet Consultation"] },
        { name: "COLLECTOR", price: 1299, items: ["Ultra-Rare Species", "Custom Enclosure Build", "6-Month Food Supply", "Lifetime Health Support", "White-Glove Delivery", "Private Vet Hotline"] },
      ],
    },
    how: {
      title: "HOW IT WORKS",
      sub: "From first click to happy pet — a transparent process designed for first-time owners and seasoned collectors alike.",
      items: [
        { t: "BROWSE & RESERVE",       d: "Explore our live catalog of rare reptiles, parrots, and small mammals. Reserve your pet with a deposit and we'll hold it until your habitat is ready." },
        { t: "HABITAT CONSULTATION",   d: "Our specialists help you set up the perfect enclosure — lighting, heating, diet, and enrichment tailored to each species." },
        { t: "SAFE DELIVERY",          d: "Overnight climate-controlled shipping with live-arrival guarantee, or pick up in-store and meet your new companion in person." },
      ],
    },
    reviews: {
      title: "TRUSTED BY KEEPERS WORLDWIDE",
      sub: "Real reviews from buyers who brought home a companion through Orely Exotics.",
      list: [
        { name: "Purwanti Dongki", role: "Reptile Keeper",   text: "My crested gecko arrived active, healthy, and beautifully patterned. The care sheet was detailed and the team answered every follow-up question within hours." },
        { name: "Tejo Intan",      role: "Hobby Breeder",    text: "I have bought from many exotic sellers, and Orely's documentation and breeder transparency is best-in-class. Lineage records were a huge plus." },
        { name: "Jack Morwogin",   role: "Parrot Owner",     text: "Our Indian ringneck shipped overnight and was calm on arrival. The habitat consultation before purchase saved us weeks of trial and error." },
        { name: "Bibit Wismore",   role: "First-Time Owner", text: "As a complete beginner I felt supported the whole way. They recommended a starter species that matched my lifestyle, not just the most expensive one." },
      ],
    },
    cta: { t1: "BRING HOME A", t2: "ONE-OF-A-KIND COMPANION", sub: "Browse the live catalog, talk to a species specialist, and reserve your pet with full confidence.", btn: "Explore Catalog" },
    footer: {
      about: "Rare and exotic pets, ethically sourced and supported for life — that is our mission.",
      shop: "Shop", shopLinks: ["New Arrivals", "Reptiles", "Parrots", "Small Mammals"],
      company: "Company", companyLinks: ["About Us", "Breeders", "Ethics Policy"],
      contact: "Contact",
      address: "135 Pento Ulm, 9A 20 KAL, Sulawesi 90245 ID",
      email: "hello@orelyexotics.com",
      contactBtn: "Contact Us",
      copy: "© 2026 Orely Exotics. All rights reserved.",
    },
  },
  zh: {
    brand: "奇珍异宠",
    tagline: "稀有 · 合法 · 健康",
    nav: { home: "首页", about: "关于我们", shop: "选购", species: "物种", contact: "联系" },
    hero: {
      title1: "寻找你的",
      title2: "奇珍异宠伙伴！",
      sub: "精选稀有、合法来源的异宠，配送到家并附完整养护指南。",
      category: "类别",
      categoryOptions: ["爬行类", "鹦鹉类", "小型哺乳", "水族", "蛛形类"],
      region: "配送",
      regionOptions: ["国内配送", "亚洲配送", "欧美配送", "到店自取"],
      budget: "预算",
      budgetOptions: ["¥1,500 以下", "¥1,500 – ¥8,000", "¥8,000 – ¥30,000", "¥30,000 以上"],
      cta: "立即选购",
      searching: "正在搜索",
      resultsFor: "个匹配结果",
    },
    stories: [
      { kicker: "奇珍异宠", t1: "稀有物种", t2: "精品市集", body: "我们是一家精选型异宠交易平台，汇集爬行类、鹦鹉、小型哺乳与水族物种。所有动物只来自持证、符合动物福利标准的专业繁育机构。" },
      { kicker: "奇珍异宠", t1: "活体到家", t2: "健康保证", body: "全程恒温隔夜配送，提供活体到家保障。每只动物经驻场兽医筛查，随附健康证明、喂养计划和栖息环境清单，出库前严格复核。" },
      { kicker: "奇珍异宠", t1: "合法来源", t2: "与终身服务", body: "绝不售卖野捕动物。繁育证件可查、血统档案公开，所有买家享受终身饲养咨询，让你的异宠伙伴长久健康地陪伴你。" },
    ],
    pricing: {
      title: "套餐与价格",
      sub: "选择适合你经验的组合 — 包含动物本体、栖息环境与持续支持。",
      perBundle: "/套餐",
      plans: [
        { name: "入门版", price: 1499, items: ["新手友好物种", "基础栖息套装", "初始饲料包", "30 天健康保障", "免费养护手册"] },
        { name: "进阶版", price: 3999, items: ["稀有花色可选", "完整栖息搭建", "三月饲料补给", "90 天健康保障", "隔夜快速配送", "兽医咨询服务"] },
        { name: "收藏版", price: 9999, items: ["超稀有物种", "定制专属笼舍", "半年饲料补给", "终身健康支持", "专人送货上门", "兽医专线热线"] },
      ],
    },
    how: {
      title: "购买流程",
      sub: "从浏览到入户 — 为新手与资深玩家打造的透明流程。",
      items: [
        { t: "浏览与预订", d: "查看实时在售的爬行、鹦鹉与小型哺乳动物，付定金预订，待你栖息环境准备好再发货。" },
        { t: "环境咨询",   d: "专家协助你完成最佳笼舍搭建 — 灯光、温控、饮食与丰容，按物种定制。" },
        { t: "安全送达",   d: "恒温隔夜配送 + 活体到家保障，也可到店自取，面对面迎接你的新伙伴。" },
      ],
    },
    reviews: {
      title: "全球饲主信赖之选",
      sub: "来自真实买家的反馈 — 他们通过奇珍异宠把伙伴带回家。",
      list: [
        { name: "王芷晴", role: "爬宠饲主",   text: "睫角守宫到家状态超好，花色漂亮，饲养手册非常详细，售后响应也很及时。" },
        { name: "林墨寒", role: "爱好繁育者", text: "买过很多家异宠，奇珍异宠的繁育档案和透明度是顶级的，血统记录加分巨大。" },
        { name: "赵嘉诚", role: "鹦鹉饲主",   text: "我们的月轮鹦鹉隔夜到达，状态平稳。购买前的栖息咨询帮我们省去大量摸索时间。" },
        { name: "周若萱", role: "新手饲主",   text: "作为完全的新手，全程被专业陪伴。他们推荐了适合我生活节奏的入门物种，而不是最贵的。" },
      ],
    },
    cta: { t1: "把独一无二的", t2: "珍稀伙伴带回家", sub: "浏览实时在售目录，与物种专家沟通，安心预订。", btn: "查看目录" },
    footer: {
      about: "稀有异宠，合法来源、终身服务 —— 这就是我们的使命。",
      shop: "选购", shopLinks: ["新品上架", "爬行类", "鹦鹉类", "小型哺乳"],
      company: "公司", companyLinks: ["关于我们", "繁育伙伴", "道德准则"],
      contact: "联系",
      address: "印尼苏拉威西 Pento Ulm 135 号 9A-20 KAL,90245",
      email: "hello@orelyexotics.com",
      contactBtn: "联系我们",
      copy: "© 2026 奇珍异宠 保留所有权利。",
    },
  },
};

export type Dict = typeof dict.en;
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "zh") {
      setLangState(saved);
      return;
    }
    const sys = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "en";
    setLangState(sys.startsWith("zh") ? "zh" : "en");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  return (
    <I18nCtx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</I18nCtx.Provider>
  );
}

export function useI18n() {
  const v = useContext(I18nCtx);
  if (!v) throw new Error("useI18n outside provider");
  return v;
}
