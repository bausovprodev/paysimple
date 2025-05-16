"use client";
import React, { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Ошибка входа");
      }
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex flex-1 w-full justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md mx-auto rounded-2xl bg-white/70 shadow-md px-10 py-12 flex flex-col gap-4 border border-neutral-100">
        <div className="flex justify-center mb-2">
          <span className="font-mono text-2xl tracking-widest text-neutral-700 select-none">PAYSIMPLE</span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-1">Login</h2>
        <p className="text-neutral-400 text-center mb-6">Log in to get started</p>
        {error && <div className="bg-rose-50 text-rose-700 text-sm rounded p-2 mb-2 text-center">{error}</div>}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email."
            autoComplete="username"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-3 rounded-md border border-neutral-200 shadow-sm focus:ring-2 focus:ring-primary/30 transition outline-none bg-white/90 text-base"
            required
          />
          <div className="relative flex items-center">
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="px-4 py-3 rounded-md border border-neutral-200 shadow-sm focus:ring-2 focus:ring-primary/30 transition outline-none bg-white/90 text-base w-full"
              required
            />
            <button
              tabIndex={-1}
              type="button"
              className="absolute right-3 text-neutral-400 hover:text-neutral-700 bg-white/0 px-1 py-1"
              title="Показать пароль"
              disabled
              style={{ pointerEvents: "none", opacity: 0.5 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
          <button type="submit" className="mt-4 w-full py-3 rounded-md bg-[#33e2ce] hover:bg-[#16d9b9] text-black font-semibold text-lg transition disabled:opacity-60" disabled={loading}>{loading ? "Входим..." : "Log in"}</button>
        </form>
        <p className="text-center text-sm text-neutral-500 mt-2">
          Нет аккаунта? <span className="underline">Регистрация временно недоступна</span>
        </p>
      </div>
    </section>
  );
}
