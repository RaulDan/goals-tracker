// node_modules/svelte/src/internal/shared/utils.js
var e = Array.isArray, t = Array.prototype.indexOf, n = Array.prototype.includes, r = Array.from, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyDescriptors, s = Object.prototype, c = Array.prototype, l = Object.getPrototypeOf, u = Object.isExtensible, d = () => {};
function f(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function p() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
var m = 1024, h = 2048, g = 4096, _ = 8192, v = 16384, y = 32768, b = 1 << 25, x = 65536, S = 1 << 19, ee = 1 << 20, te = 1 << 25, ne = 1 << 21, re = 1 << 22, ie = 1 << 23, ae = Symbol("$state"), oe = Symbol("component"), se = Symbol(""), ce = Symbol("attributes"), le = Symbol("class"), ue = Symbol("style"), de = Symbol("text"), fe = Symbol("form reset"), pe = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), me = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), he = {}, C = Symbol("uninitialized"), ge = "http://www.w3.org/1999/xhtml";
function _e() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function ve(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ye() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
// node_modules/svelte/src/internal/client/dom/hydration.js
var w = !1;
function be(e) {
	w = e;
}
var T;
function E(e) {
	if (e === null) throw ve(), he;
	return T = e;
}
function xe() {
	return E(/* @__PURE__ */ Yt(T));
}
function D(e) {
	if (w) {
		if (/* @__PURE__ */ Yt(T) !== null) throw ve(), he;
		T = e;
	}
}
function Se(e = 1) {
	if (w) {
		for (var t = e, n = T; t--;) n = /* @__PURE__ */ Yt(n);
		T = n;
	}
}
function Ce(e = !0) {
	for (var t = 0, n = T;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Yt(n);
		e && n.remove(), n = i;
	}
}
function we(e) {
	if (!e || e.nodeType !== 8) throw ve(), he;
	return e.data;
}
// node_modules/svelte/src/internal/client/reactivity/equality.js
function Te(e) {
	return e === this.v;
}
function Ee(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function De(e) {
	return !Ee(e, this.v);
}
function Oe(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
// node_modules/svelte/src/internal/client/errors.js
function ke() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Ae(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function je(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Me() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ne(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Pe() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ie() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Le() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Re() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
// node_modules/svelte/src/internal/client/context.js
var O = null;
function ze(e) {
	O = e;
}
function Be(e, t = !1, n) {
	O = {
		p: O,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: K,
		l: null
	};
}
function Ve(e) {
	var t = O, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) ln(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, O = t.p, He(e);
}
function He(e = {}) {
	return i(e, oe, { value: !0 }), e;
}
function Ue() {
	return !0;
}
// node_modules/svelte/src/internal/client/dom/task.js
var We = [];
function Ge() {
	var e = We;
	We = [], f(e);
}
function k(e) {
	if (We.length === 0 && !vt) {
		var t = We;
		queueMicrotask(() => {
			t === We && Ge();
		});
	}
	We.push(e);
}
function Ke() {
	for (; We.length > 0;) Ge();
}
// node_modules/svelte/src/internal/client/reactivity/status.js
var qe = ~(h | g | m);
function A(e, t) {
	e.f = e.f & qe | t;
}
function Je(e) {
	e.f & 512 || e.deps === null ? A(e, m) : A(e, g);
}
// node_modules/svelte/src/internal/client/reactivity/utils.js
function Ye(e, t) {
	e.f & 2048 ? t.set(e, h) : e.f & 4096 && t.get(e) !== 2048 && t.set(e, g), A(e, m);
}
// node_modules/svelte/src/internal/client/dom/elements/misc.js
function Xe(e) {
	w && /* @__PURE__ */ Jt(e) !== null && Zt(e);
}
var Ze = !1;
function Qe() {
	Ze || (Ze = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[fe]?.();
		});
	}, { capture: !0 }));
}
// node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function $e(e) {
	var t = U, n = K;
	G(null), q(null);
	try {
		return e();
	} finally {
		G(t), q(n);
	}
}
function et(e, t, n, r = n) {
	e.addEventListener(t, () => $e(n));
	let i = e[fe];
	e[fe] = i ? () => {
		i(), r(!0);
	} : () => r(!0), Qe();
}
// node_modules/svelte/src/internal/client/reactivity/async.js
function tt(e, t, n, r) {
	let i = Ue() ? at : lt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = K, c = nt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				B(e, s);
			}
			rt();
		}
	}
	var d = it();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ st(e))).then(u).catch((e) => B(e, s)).finally(d);
	}
	l ? l.then(() => {
		s.f & 16384 ? d() : (c(), f(), rt());
	}) : f();
}
function nt() {
	var e = K, t = U, n = O, r = j;
	return function(i = !0) {
		q(e), G(t), ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function rt(e = !0) {
	q(null), G(null), ze(null), e && j?.deactivate();
}
function it() {
	var e = K, t = e.b, n = j, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function at(e) {
	var t = 2 | h;
	return K !== null && (K.f |= S), {
		ctx: O,
		deps: null,
		effects: null,
		equals: Te,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: C,
		wv: 0,
		parent: K,
		ac: null
	};
}
var ot = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function st(e, t, n) {
	let r = K;
	r === null && ke();
	var i = void 0, a = Pt(C), o = !U, s = /* @__PURE__ */ new Set();
	return dn(() => {
		var t = K, n = p();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== pe && n.reject(e);
			}).finally(rt);
		} catch (e) {
			n.reject(e), rt();
		}
		var c = j;
		if (o) {
			if (t.f & 32768) var l = it();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(ot);
			else for (let e of s.values()) e.reject(ot);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== ot && (c.activate(), t ? (a.f |= ie, Rt(a, t)) : (a.f & 8388608 && (a.f ^= ie), Rt(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), sn(() => {
		for (let e of s) e.reject(ot);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(a) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function ct(e) {
	let t = /* @__PURE__ */ at(e);
	return On(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function lt(e) {
	let t = /* @__PURE__ */ at(e);
	return t.equals = De, t;
}
function ut(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) H(t[n]);
	}
}
function dt(e) {
	var t, n = K, r = e.parent;
	if (!En && r !== null && e.v !== C && r.f & 24576) return _e(), e.v;
	q(r);
	try {
		ut(e), t = Ln(e);
	} finally {
		q(n);
	}
	return t;
}
function ft(e) {
	var t = dt(e);
	!e.equals(t) && (e.wv = Pn(), (!j?.is_fork || e.deps === null) && (j === null ? e.v = t : (j.capture(e, t, !0), gt?.capture(e, t, !0)), e.deps === null)) ? A(e, m) : En || (M === null ? Je(e) : (on() || j?.is_fork) && M.set(e, t));
}
function pt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && $e(() => {
		t.ac.abort(pe), t.ac = null;
	}), t.fn !== null && (t.teardown = d), Bn(t, 0), gn(t));
}
function mt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Vn(t);
}
// node_modules/svelte/src/internal/client/reactivity/batch.js
var ht = null, j = null, gt = null, M = null, _t = null, vt = !1, yt = !1, bt = null, xt = null, St = 0, Ct = 1, wt = class e {
	id = Ct++;
	started = !1;
	linked = !0;
	prev = null;
	next = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#e = /* @__PURE__ */ new Set();
	#t = /* @__PURE__ */ new Set();
	#n = 0;
	#r = /* @__PURE__ */ new Map();
	#i = null;
	#a = [];
	#o = [];
	#s = /* @__PURE__ */ new Map();
	#c = /* @__PURE__ */ new Map();
	#l = /* @__PURE__ */ new Set();
	is_fork = !1;
	#u = !1;
	constructor() {
		ht === null ? ht = this : (ht.next = this, this.prev = ht), ht = this;
	}
	#d() {
		if (this.is_fork) return !0;
		for (let e of this.#r.keys()) if (!this.#f(e)) return !0;
		return !1;
	}
	#f(e) {
		for (var t = e; t !== null; t = t.parent) if (this.#c.has(t)) return !0;
		return !1;
	}
	skip_effect(e) {
		this.#c.has(e) || this.#c.set(e, {
			d: [],
			m: []
		}), this.#l.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#c.get(e);
		if (n) {
			this.#c.delete(e);
			for (var r of n.d) A(r, h), t(r);
			for (r of n.m) A(r, g), t(r);
		}
		this.#l.add(e);
	}
	#p() {
		var e = [];
		for (let i of this.#a) if (!(i.f & 16384 || !(i.f & 6144))) {
			for (var t = i, n = !1; t.parent !== null;) {
				t = t.parent;
				var r = t.f;
				if (r & 96) {
					if (!(r & 1024)) {
						n = !0;
						break;
					}
					t.f ^= m;
				}
			}
			n || e.push(t);
		}
		return this.#a = [], e;
	}
	#m() {
		this.started = !0;
		for (let [e, t] of this.#s) A(e, t), this.schedule(e);
		this.apply();
		for (var t = bt = [], n = [], r = xt = []; this.#a.length > 0;) {
			St++ > 1e3 && (this.#b(), Et());
			for (let e of this.#p()) try {
				this.#h(e, t, n);
			} catch (t) {
				throw jt(e), this.#d() || this.discard(), t;
			}
		}
		if (j = null, r.length > 0) {
			var i = e.ensure();
			for (let e of r) i.schedule(e);
		}
		if (bt = null, xt = null, this.#d()) {
			this.#y(n), this.#y(t);
			for (let [e, t] of this.#c) At(e, t);
			r.length > 0 && j.#m();
			return;
		}
		let a = this.#g();
		if (a) this.#y(n), this.#y(t), a.#v(this);
		else {
			this.#s.clear();
			for (let e of this.#e) e(this);
			this.#e.clear(), gt = this, Ot(n), Ot(t), gt = null, this.#i?.resolve();
			var o = j;
			this.#n === 0 && (this.#a.length === 0 || o !== null) && this.#b(), o !== null && (N.clear(), o.#m());
		}
	}
	#h(e, t, n) {
		e.f ^= m;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#c.has(r)) && r.fn !== null) {
				a ? r.f ^= m : i & 4 ? t.push(r) : Fn(r) && (i & 16 && this.add_dirty_reaction(r, g), Vn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#g() {
		for (var e = this.prev; e !== null; e = e.prev) if (!e.is_fork && this.#_(e)) return e;
		return null;
	}
	#_(e) {
		for (let [t, [, n]] of this.current) if (!n && e.current.has(t)) return !0;
		return !1;
	}
	#v(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_reactions(e.#s);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#s.delete(i), A(i, h), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#b(), j = this, this.#m();
	}
	#y(e) {
		for (var t = 0; t < e.length; t += 1) Ye(e[t], this.#s);
	}
	capture(e, t, n = !1) {
		e.v !== C && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), M?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		j = this;
	}
	deactivate() {
		j = null, M = null;
	}
	flush() {
		try {
			yt = !0, j = this, this.#m();
		} finally {
			St = 0, _t = null, bt = null, xt = null, yt = !1, j = null, M = null, N.clear();
		}
	}
	discard() {
		for (let e of this.#t) e(this);
		this.#t.clear();
		for (let e of this.async_deriveds.values()) e.reject(ot);
		this.#b(), this.#i?.resolve();
	}
	register_created_effect(e) {
		this.#o.push(e);
	}
	increment(e, t) {
		if (this.#n += 1, e) {
			let e = this.#r.get(t) ?? 0;
			this.#r.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#n, e) {
			let e = this.#r.get(t) ?? 0;
			e === 1 ? this.#r.delete(t) : this.#r.set(t, e - 1);
		}
		this.#u || (this.#u = !0, k(() => {
			this.#u = !1, this.linked && this.flush();
		}));
	}
	transfer_reactions(e) {
		for (let [t, n] of e) this.add_dirty_reaction(t, n);
		e.clear();
	}
	add_dirty_reaction(e, t) {
		(t === 2048 || this.#s.get(e) !== 2048) && this.#s.set(e, t);
	}
	oncommit(e) {
		this.#e.add(e);
	}
	ondiscard(e) {
		this.#t.add(e);
	}
	settled() {
		return (this.#i ??= p()).promise;
	}
	static ensure() {
		if (j === null) {
			let t = j = new e();
			!yt && !vt && k(() => {
				t.started || t.flush();
			});
		}
		return j;
	}
	apply() {
		M = null;
	}
	schedule(e) {
		_t = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768) ? e.b.defer_effect(e) : this.#a.push(e);
	}
	#b() {
		if (this.linked) {
			var e = this.prev, t = this.next;
			e === null || (e.next = t), t === null ? ht = e : t.prev = e, this.linked = !1;
		}
	}
};
function Tt(e) {
	var t = vt, n = gt;
	gt = null, vt = !0;
	try {
		var r;
		for (e && (Tt(), r = e());;) {
			if (Ke(), j === null) return r;
			j.flush();
		}
	} finally {
		vt = t, gt = n;
	}
}
function Et() {
	try {
		Pe();
	} catch (e) {
		B(e, _t);
	}
}
var Dt = null;
function Ot(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Fn(r) && (Dt = /* @__PURE__ */ new Set(), Vn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && yn(r), Dt?.size > 0)) {
				N.clear();
				for (let e of Dt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Dt.has(n) && (Dt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Vn(n);
					}
				}
				Dt.clear();
			}
		}
		Dt = null;
	}
}
function kt(e) {
	j.schedule(e);
}
function At(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), A(e, m);
		for (var n = e.first; n !== null;) At(n, t), n = n.next;
	}
}
function jt(e) {
	A(e, m);
	for (var t = e.first; t !== null;) jt(t), t = t.next;
}
// node_modules/svelte/src/internal/client/reactivity/sources.js
var Mt = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), Nt = !1;
function Pt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Te,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function P(e, t) {
	let n = Pt(e, t);
	return On(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Ft(e, t = !1, n = !0) {
	let r = Pt(e);
	return t || (r.equals = De), r;
}
function F(e, t, n = !1) {
	return U !== null && (!W || U.f & 131072) && Ue() && U.f & 4325394 && (J === null || !J.has(e)) && Le(), Rt(e, n ? Ht(t) : t, xt);
}
var It = null, Lt = 0;
function Rt(e, t, n = null) {
	if (!e.equals(t)) {
		En ? N.set(e, t) : N.has(e) || N.set(e, e.v);
		var r = wt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && dt(t), M === null && Je(t);
		}
		e.wv = Pn(), It = null, Lt = 0, Vt(e, h, n), It = null, Ue() && K !== null && K.f & 1024 && !(K.f & 96) && (Z === null ? kn([e]) : Z.push(e)), !r.is_fork && Mt.size > 0 && !Nt && zt();
	}
	return t;
}
function zt() {
	Nt = !1;
	for (let e of Mt) {
		e.f & 1024 && A(e, g);
		let t;
		try {
			t = Fn(e);
		} catch {
			t = !0;
		}
		t && Vn(e);
	}
	Mt.clear();
}
function Bt(e) {
	F(e, e.v + 1);
}
function Vt(e, t, n) {
	var r = e.reactions;
	if (r !== null) {
		var i = Ue(), a = r.length;
		if (Lt += a, Lt > 1e5 && It === null && (It = /* @__PURE__ */ new Set()), It !== null) {
			if (It.has(e)) return;
			It.add(e);
		}
		for (var o = 0; o < a; o++) {
			var s = r[o], c = s.f;
			if (i || s !== K) {
				var l = (c & h) === 0;
				if (l && A(s, t), c & 131072) Mt.add(s);
				else if (c & 2) {
					var u = s;
					M?.delete(u), Vt(u, g, n);
				} else if (l) {
					var d = s;
					c & 16 && Dt !== null && Dt.add(d), n === null ? kt(d) : n.push(d);
				}
			}
		}
	}
}
function Ht(t) {
	if (typeof t != "object" || !t || ae in t || oe in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = /* @__PURE__ */ new Map(), i = e(t), o = /* @__PURE__ */ P(0), u = null, d = Mn, f = (e) => {
		if (Mn === d) return e();
		var t = U, n = Mn;
		G(null), Nn(d);
		var r = e();
		return G(t), Nn(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ P(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			"value" in n && n.configurable !== !1 && n.enumerable !== !1 && n.writable !== !1 || Fe();
			var i = r.get(t);
			return i === void 0 ? f(() => {
				var e = /* @__PURE__ */ P(n.value, u);
				return r.set(t, e), e;
			}) : F(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (n === void 0) {
				if (t in e) {
					let e = f(() => /* @__PURE__ */ P(C, u));
					r.set(t, e), Bt(o);
				}
			} else F(n, C), Bt(o);
			return !0;
		},
		get(e, n, i) {
			if (n === ae) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ P(Ht(s ? e[n] : C), u)), r.set(n, o)), o !== void 0) {
				var c = Q(o);
				return c === C ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			this.has?.(e, t);
			var n = Reflect.getOwnPropertyDescriptor(e, t), i = r.get(t);
			if (i !== void 0) {
				var a = Q(i);
				if (a === C) return;
				if (n && "value" in n) n.value = a;
				else return {
					enumerable: !0,
					configurable: !0,
					value: a,
					writable: !0
				};
			}
			return n;
		},
		has(e, t) {
			if (t === ae) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== C || Reflect.has(e, t);
			return (n !== void 0 || (K !== null || U !== null) && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ P(i ? Ht(e[t]) : C, u)), r.set(t, n)), Q(n) === C) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => /* @__PURE__ */ P(C, u)), r.set(d + "", p)) : F(p, C);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => /* @__PURE__ */ P(void 0, u)), F(c, Ht(n)), r.set(t, c));
			else {
				l = c.v !== C;
				var m = f(() => Ht(n));
				F(c, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, n), !l) {
				if (i && typeof t == "string") {
					var g = r.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && F(g, _ + 1);
				}
				Bt(o);
			}
			return !0;
		},
		ownKeys(e) {
			Q(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== C;
			});
			for (var [n, i] of r) i.v !== C && !(n in e) && t.push(n);
			return t;
		},
		setPrototypeOf() {
			Ie();
		}
	});
}
var Ut, Wt, Gt, Kt;
function qt() {
	if (Ut === void 0) {
		Ut = window, Wt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Gt = a(t, "firstChild").get, Kt = a(t, "nextSibling").get, u(e) && (e[le] = void 0, e[ce] = null, e[ue] = void 0, e.__e = void 0), u(n) && (n[de] = void 0);
	}
}
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Jt(e) {
	return Gt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Yt(e) {
	return Kt.call(e);
}
function L(e, t) {
	if (!w) return /* @__PURE__ */ Jt(e);
	var n = /* @__PURE__ */ Jt(T);
	if (n === null) n = T.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), E(r), r;
	}
	return t && en(n), E(n), n;
}
function Xt(e, t = !1) {
	if (!w) {
		var n = /* @__PURE__ */ Jt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Yt(n) : n;
	}
	if (t) {
		if (T?.nodeType !== 3) {
			var r = I();
			return T?.before(r), E(r), r;
		}
		en(T);
	}
	return T;
}
function R(e, t = !1) {
	if (!w) return /* @__PURE__ */ Jt(e);
	var n = L(e, t);
	return D(e), n;
}
function z(e, t = 1, n = !1) {
	let r = w ? T : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Yt(r);
	if (!w) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = I();
			return r === null ? i?.after(a) : r.before(a), E(a), a;
		}
		en(r);
	}
	return E(r), r;
}
function Zt(e) {
	e.textContent = "";
}
function Qt() {
	return !1;
}
function $t(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function en(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function tn(e) {
	var t = K;
	if (t === null) return U.f |= ie, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	B(e, t);
}
function B(e, t) {
	if (e === he) throw e;
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128 && !(t.f & 33570816)) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
// node_modules/svelte/src/internal/client/reactivity/effects.js
function nn(e) {
	K === null && (U === null && Ne(e), Me()), En && je(e);
}
function rn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function an(e, t) {
	var n = K;
	n !== null && n.f & 8192 && (e |= _);
	var r = {
		ctx: O,
		deps: null,
		nodes: null,
		f: e | h | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	j?.register_created_effect(r);
	var i = r;
	if (e & 4) bt === null ? wt.ensure().schedule(r) : bt.push(r);
	else if (t !== null) {
		try {
			Vn(r);
		} catch (e) {
			throw H(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= x));
	}
	if (i !== null && (i.parent = n, n !== null && rn(i, n), U !== null && U.f & 2 && !(e & 64))) {
		var a = U;
		(a.effects ??= []).push(i);
	}
	return r;
}
function on() {
	return U !== null && !W;
}
function sn(e) {
	let t = an(8, null);
	return A(t, m), t.teardown = e, t;
}
function cn(e) {
	nn("$effect");
	var t = K.f;
	if (!U && t & 32 && O !== null && !O.i) {
		var n = O;
		(n.e ??= []).push(e);
	} else return ln(e);
}
function ln(e) {
	return an(4 | ee, e);
}
function un(e) {
	wt.ensure();
	let t = an(64 | S, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? bn(t, () => {
			H(t), n(void 0);
		}) : (H(t), n(void 0));
	});
}
function dn(e) {
	return an(re | S, e);
}
function fn(e, t = 0) {
	return an(8 | t, e);
}
function pn(e, t = [], n = [], r = []) {
	tt(r, t, n, (t) => {
		an(8, () => {
			e(...t.map(Q));
		});
	});
}
function mn(e, t = 0) {
	return an(16 | t, e);
}
function V(e) {
	return an(32 | S, e);
}
function hn(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = En, r = U;
		Dn(!0), G(null);
		try {
			t.call(null);
		} catch (t) {
			B(t, e.parent);
		} finally {
			Dn(n), G(r);
		}
	}
}
function gn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && $e(() => {
			e.abort(pe);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : H(n, t), n = r;
	}
}
function _n(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || H(t), t = n;
	}
}
function H(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (vn(e.nodes.start, e.nodes.end), n = !0), e.f |= b, gn(e, t && !n), Bn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	hn(e), e.f ^= b, e.f |= v;
	var i = e.parent;
	i !== null && i.first !== null && yn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function vn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Yt(e);
		e.remove(), e = n;
	}
}
function yn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function bn(e, t, n = !0) {
	var r = [];
	e.f |= 256, xn(e, r, !0);
	var i = () => {
		n && H(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function xn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= _;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				xn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Sn(e) {
	e.f &= -257, Cn(e, !0);
}
function Cn(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		e.f ^= _, e.f & 1024 || (A(e, h), wt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Cn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function wn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Yt(n);
		t.append(n), n = i;
	}
}
// node_modules/svelte/src/internal/client/legacy.js
var Tn = null, En = !1;
function Dn(e) {
	En = e;
}
var U = null, W = !1;
function G(e) {
	U = e;
}
var K = null;
function q(e) {
	K = e;
}
var J = null;
function On(e) {
	U !== null && (U.f & 2097152 || U.f & 2) && (J ??= /* @__PURE__ */ new Set()).add(e);
}
var Y = null, X = 0, Z = null;
function kn(e) {
	Z = e;
}
var An = 1, jn = 0, Mn = jn;
function Nn(e) {
	Mn = e;
}
function Pn() {
	return ++An;
}
function Fn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Fn(a) && ft(a), a.wv > e.wv) return !0;
		}
		t & 512 && M === null && A(e, m);
	}
	return !1;
}
function In(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(J !== null && J.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? In(a, t, !1) : t === a && (n ? A(a, h) : a.f & 1024 && A(a, g), kt(a));
	}
}
function Ln(e) {
	var t = Y, n = X, r = Z, i = U, a = J, o = O, s = W, c = Mn, l = e.f;
	Y = null, X = 0, Z = null, U = l & 96 ? null : e, J = null, ze(e.ctx), W = !1, Mn = ++jn, e.ac !== null && ($e(() => {
		e.ac.abort(pe);
	}), e.ac = null);
	try {
		e.f |= ne;
		var u = e.fn, d = u();
		e.f |= y;
		var f = Rn(e);
		if (Ue() && Z !== null && !W && f !== null && !(e.f & 6146)) for (var p = 0; p < Z.length; p++) In(Z[p], e);
		if (i !== null && i !== e) {
			if (jn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = jn;
			if (t !== null) for (let e of t) e.rv = jn;
			Z !== null && (r === null ? r = Z : r.push(...Z));
		}
		return e.f & 8388608 && (e.f ^= ie), d;
	} catch (t) {
		return Rn(e), tn(t);
	} finally {
		e.f ^= ne, Y = t, X = n, Z = r, U = i, J = a, ze(o), W = s, Mn = c;
	}
}
function Rn(e) {
	var t = e.deps, n = j?.is_fork;
	if (Y !== null) {
		var r;
		if (n || Bn(e, X), t !== null && X > 0) for (t.length = X + Y.length, r = 0; r < Y.length; r++) t[X + r] = Y[r];
		else e.deps = t = Y;
		if (on() && e.f & 512) for (r = X; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && X < t.length && (Bn(e, X), t.length = X);
	return t;
}
function zn(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (Y === null || !n.call(Y, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512), s.v !== C && Je(s), s.ac !== null && $e(() => {
			s.ac.abort(pe), s.ac = null, A(s, h);
		}), pt(s), Bn(s, 0);
	}
}
function Bn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) zn(e, n[r]);
}
function Vn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		A(e, m);
		var n = K;
		K = e;
		try {
			t & 16777232 ? _n(e) : gn(e), hn(e);
			var r = Ln(e);
			e.teardown = typeof r == "function" ? r : null, e.wv = An;
		} finally {
			K = n;
		}
	}
}
async function Hn() {
	await Promise.resolve(), Tt();
}
function Q(e) {
	var t = !!(e.f & 2);
	if (Tn?.add(e), U !== null && !W && !(K !== null && K.f & 16384) && (J === null || !J.has(e))) {
		var r = U.deps;
		if (U.f & 2097152) e.rv < jn && (e.rv = jn, Y === null && r !== null && r[X] === e ? X++ : Y === null ? Y = [e] : Y.push(e));
		else {
			U.deps ??= [], n.call(U.deps, e) || U.deps.push(e);
			var i = e.reactions;
			i === null ? e.reactions = [U] : n.call(i, U) || i.push(U);
		}
	}
	if (En && N.has(e)) return N.get(e);
	if (t) {
		var a = e;
		if (En) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || Wn(a)) && (o = dt(a)), N.set(a, o), o;
		}
		var s = !(a.f & 512) && !W && U !== null && !!(U.f & 512), c = (a.f & y) === 0;
		Fn(a) && (s && (a.f |= 512), ft(a)), s && !c && (mt(a), Un(a));
	}
	if (M?.has(e)) return M.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Un(e) {
	if (e.f |= 512, e.deps !== null) for (let r of e.deps) {
		var t = r.reactions;
		t === null ? r.reactions = [e] : n.call(t, e) || t.push(e), r.f & 2 && !(r.f & 512) && (mt(r), Un(r));
	}
}
function Wn(e) {
	if (e.v === C) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (N.has(t) || t.f & 2 && Wn(t)) return !0;
	return !1;
}
function Gn(e) {
	var t = W;
	try {
		return W = !0, e();
	} finally {
		W = t;
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var Kn = ["touchstart", "touchmove"];
function qn(e) {
	return Kn.includes(e);
}
// node_modules/svelte/src/internal/client/dom/elements/events.js
var Jn = Symbol("events"), Yn = /* @__PURE__ */ new Set(), Xn = /* @__PURE__ */ new Set();
function Zn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || rr.call(t, e), !e.cancelBubble) return $e(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, k(() => {
		i.__removed || t.addEventListener(e, i, r);
	})) : t.addEventListener(e, i, r), i;
}
function Qn(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Zn(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && sn(() => {
		o.__removed = !0, t.removeEventListener(e, o, a);
	});
}
function $n(e, t, n) {
	(t[Jn] ??= {})[e] = n;
}
function er(e) {
	for (var t = 0; t < e.length; t++) Yn.add(e[t]);
	for (var n of Xn) n(e);
}
var tr = null, nr = !1;
function rr(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	tr = e, nr || (nr = !0, setTimeout(() => {
		nr = !1, tr = null;
	}));
	var s = 0, c = tr === e && e[Jn];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[Jn] = t;
			return;
		}
		var u = a.indexOf(t);
		if (u === -1) return;
		l <= u && (s = l);
	}
	if (o = a[s] || e.target, o !== t) {
		i(e, "currentTarget", {
			configurable: !0,
			get() {
				return o || n;
			}
		});
		var d = U, f = K;
		G(null), q(null);
		try {
			for (var p, m = []; o !== null && o !== t;) {
				try {
					var h = o[Jn]?.[r];
					h == null || o.disabled && e.target !== o || h.call(o, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				s++, o = s < a.length ? a[s] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Jn] = t, delete e.currentTarget, G(d), q(f);
		}
	}
}
// node_modules/svelte/src/internal/client/dom/reconciler.js
var ir = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ar(e) {
	return ir?.createHTML(e) ?? e;
}
function or(e) {
	var t = $t("template");
	return t.innerHTML = ar(e.replaceAll("<!>", "<!---->")), t.content;
}
// node_modules/svelte/src/internal/client/dom/template.js
function sr(e, t) {
	var n = K;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function cr(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (w) return sr(T, null), T;
		i === void 0 && (i = or(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Jt(i)));
		var t = r || Wt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Jt(t), s = t.lastChild;
			sr(o, s);
		} else sr(t, t);
		return t;
	};
}
function lr() {
	if (w) return sr(T, null), T;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = I();
	return e.append(t, n), sr(t, n), e;
}
function $(e, t) {
	if (w) {
		var n = K;
		n.f & 32768 && n.nodes.end !== null || (n.nodes.end = T), xe();
	} else e !== null && e.before(t);
}
// node_modules/svelte/src/reactivity/create-subscriber.js
function ur(e) {
	let t = 0, n = Pt(0), r;
	return () => {
		on() && (Q(n), fn(() => (t === 0 && (r = Gn(() => e(() => Bt(n)))), t += 1, () => {
			k(() => {
				--t, t === 0 && (r?.(), r = void 0, Bt(n));
			});
		})));
	};
}
// node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var dr = x | S;
function fr(e, t, n, r) {
	new pr(e, t, n, r);
}
var pr = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = w ? T : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Map();
	#p = null;
	#m = ur(() => (this.#p = Pt(this.#l), () => {
		this.#p = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = K;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = mn(() => {
			if (w) {
				let e = we(this.#t);
				xe();
				let t = e === "[!";
				if (e.startsWith("[?")) {
					let t = JSON.parse(e.slice(2));
					this.#g(t);
				} else t ? this.#y() : this.#h();
			} else this.#b();
		}, dr), w && (this.#e = T);
	}
	#h() {
		try {
			this.#a = V(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#g(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#_(e);
		k(r), t && (this.#s = V(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#_(e) {
		var t = !1, n = !1;
		let r = () => {
			this.#v() || (t ? ye() : (t = !0, n && Re(), this.#s !== null && bn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			})));
		};
		return {
			reset: r,
			invoke_onerror: () => {
				if (!this.#v()) try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					B(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#v() {
		return (this.#i.f & (v | b)) !== 0;
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = V(() => e(this.#e)), k(() => {
			if (!this.#v()) {
				var e = this.#c = document.createDocumentFragment(), t = I(), n = !1;
				e.append(t), this.#a = this.#S(() => {
					try {
						return V(() => this.#r(t));
					} catch (e) {
						try {
							this.error(e), n = !0;
						} catch (e) {
							B(e, this.#i.parent);
						}
						return null;
					}
				}), this.#a === null ? (this.#c = null, n && this.#x(j)) : this.#u === 0 && (this.#e.before(e), this.#c = null, bn(this.#o, () => {
					this.#o = null;
				}), this.#x(j));
			}
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = V(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				wn(this.#a, e);
				let t = this.#n.pending;
				this.#o = V(() => t(this.#e));
			} else this.#x(j);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_reactions(this.#f);
	}
	defer_effect(e) {
		Ye(e, this.#f);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = K, n = U, r = O;
		q(this.#i), G(this.#i), ze(this.#i.ctx);
		try {
			return wt.ensure(), e();
		} finally {
			q(t), G(n), ze(r);
		}
	}
	#C(e, t) {
		this.has_pending_snippet() ? (this.#u += e, this.#u === 0 && (this.#x(t), this.#o && bn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null))) : this.parent && this.parent.#C(e, t);
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#p || this.#d) && (this.#d = !0, k(() => {
			this.#d = !1, this.#p && Rt(this.#p, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#m(), Q(this.#p);
	}
	error(e) {
		if (e === he || !this.#n.onerror && !this.#n.failed) throw e;
		j?.is_fork ? (this.#a && j.skip_effect(this.#a), this.#o && j.skip_effect(this.#o), this.#s && j.skip_effect(this.#s), j.oncommit(() => {
			this.#v() || this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (H(this.#a), null), this.#o &&= (H(this.#o), null), this.#s &&= (H(this.#s), null), w && (E(this.#t), Se(), E(Ce()));
		let t = this.#n.failed, n = (e) => {
			if (this.#v()) return;
			let { reset: n, invoke_onerror: r } = this.#_(e);
			r(), t && !this.#v() && (this.#s = this.#S(() => {
				try {
					return V(() => {
						var r = K;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return B(e, this.#i.parent), null;
				}
			}));
		};
		k(() => {
			if (!this.#v()) {
				var t;
				try {
					t = this.transform_error(e);
				} catch (e) {
					B(e, this.#i && this.#i.parent);
					return;
				}
				typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => B(e, this.#i && this.#i.parent)) : n(t);
			}
		});
	}
};
function mr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[de] ??= e.nodeValue) && (e[de] = n, e.nodeValue = `${n}`);
}
function hr(e, t) {
	return _r(e, t);
}
var gr = /* @__PURE__ */ new Map();
function _r(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	qt();
	var l = void 0, u = un(() => {
		var s = n ?? t.appendChild(I());
		fr(s, { pending: () => {} }, (t) => {
			Be({});
			var n = O;
			if (o && (n.c = o), a && (i.$$events = a), w && sr(t, null), l = e(t, i) || He(), w && (K.nodes.end = T, T === null || T.nodeType !== 8 || T.data !== "]")) throw ve(), he;
			Ve();
		}, c);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = qn(r);
					for (let e of [t, document]) {
						var a = gr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), gr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, rr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(r(Yn)), Xn.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = gr.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, rr), r.delete(e), r.size === 0 && gr.delete(n)) : r.set(e, i);
			}
			Xn.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return vr.set(l, u), l;
}
var vr = /* @__PURE__ */ new WeakMap();
function yr(e, t) {
	let n = vr.get(e);
	return n ? (vr.delete(e), n(t)) : Promise.resolve();
}
// node_modules/svelte/src/internal/client/dom/blocks/branches.js
var br = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) Sn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Sn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (H(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						wn(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else H(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), bn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (H(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = j, r = Qt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = I();
				i.append(a), this.#n.set(e, {
					effect: V(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, V(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else w && (this.anchor = T), this.#a(n);
	}
};
// node_modules/svelte/src/internal/client/dom/blocks/if.js
function xr(e, t, n = !1) {
	var r;
	w && (r = T, xe());
	var i = new br(e), a = n ? x : 0;
	function o(e, t) {
		if (w) {
			var n = we(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ce();
				E(a), i.anchor = a, be(!1), i.ensure(e, t), be(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	mn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
// node_modules/svelte/src/internal/client/dom/blocks/each.js
function Sr(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		bn(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					Cr(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null && e.pending.size === 0;
		if (l) {
			var u = n, d = u.parentNode;
			Zt(d), d.append(u), e.items.clear();
		}
		Cr(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(o);
}
function Cr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= te, wn(a, document.createDocumentFragment())) : H(t[i], n);
	}
}
var wr;
function Tr(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = w ? E(/* @__PURE__ */ Jt(u)) : u.appendChild(I());
	}
	w && xe();
	var d = null, f = /* @__PURE__ */ lt(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p = /* @__PURE__ */ new Map(), m = !0;
	function h(e) {
		if (!(_.effect.f & 16384)) {
			_.pending.delete(e);
			var t = Q(f);
			_.fallback = d, Dr(_, t, c, n, a), d !== null && (t.length === 0 ? d.f & 33554432 ? (d.f ^= te, kr(d, null, c)) : Sn(d) : bn(d, () => {
				d = null;
			}));
		}
	}
	function g(e) {
		_.pending.delete(e);
	}
	var _ = {
		effect: mn(() => {
			var e = Q(f), t = e.length;
			let r = !1;
			w && we(c) === "[!" != (t === 0) && (c = Ce(), E(c), be(!1), r = !0);
			for (var u = /* @__PURE__ */ new Set(), _ = j, v = Qt(), y = 0; y < t; y += 1) {
				w && T.nodeType === 8 && T.data === "]" && (c = T, r = !0, be(!1));
				var b = e[y], x = a(b, y), S = m ? null : l.get(x);
				S ? (S.v && Rt(S.v, b), S.i && Rt(S.i, y), v && _.unskip_effect(S.e)) : (S = Or(l, m ? c : wr ??= I(), b, x, y, o, n, i), m || (S.e.f |= te), l.set(x, S)), u.add(x);
			}
			if (t === 0 && s && !d && (m ? d = V(() => s(c)) : (d = V(() => s(wr ??= I())), d.f |= te)), t > u.size && Ae("", "", ""), w && t > 0 && E(Ce()), !m) {
				if (p.set(_, u), v) {
					for (let [e, t] of l) u.has(e) || _.skip_effect(t.e);
					_.oncommit(h), _.ondiscard(g);
				} else h(_);
			}
			r && be(!0), Q(f);
		}),
		flags: n,
		items: l,
		pending: p,
		outrogroups: null,
		fallback: d
	};
	m = !1, w && (c = T);
}
function Er(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Dr(e, t, n, i, a) {
	var o = !!(i & 8), s = t.length, c = e.items, l = Er(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (Sn(_), o && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= te, _ === l) kr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Ar(e, d, _), Ar(e, _, y), kr(_, y, n), d = _, p = [], m = [], l = Er(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) kr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Ar(e, S.prev, ee.next), Ar(e, d, S), Ar(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), kr(_, l, n), Ar(e, _.prev, _.next), Ar(e, _, d === null ? e.effect.first : d.next), Ar(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Er(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Er(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Cr(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var ne = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || ne.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && ne.push(l), l = Er(l.next);
		var re = ne.length;
		if (re > 0) {
			var ie = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < re; v += 1) ne[v].nodes?.a?.measure();
				for (v = 0; v < re; v += 1) ne[v].nodes?.a?.fix();
			}
			Sr(e, ne, ie);
		}
	}
	o && k(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Or(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Pt(n) : /* @__PURE__ */ Ft(n, !1, !1) : null, l = o & 2 ? Pt(i) : null;
	return {
		v: c,
		i: l,
		e: V(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function kr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Yt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Ar(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
// node_modules/svelte/src/internal/shared/attributes.js
var jr = [..." 	\n\r\f\xA0\v﻿"];
function Mr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || jr.includes(r[o - 1])) && (s === r.length || jr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Nr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Pr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Fr(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Pr)), i && c.push(...Object.keys(i).map(Pr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Pr(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Nr(r)), i && (n += Nr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
// node_modules/svelte/src/internal/client/dom/elements/class.js
function Ir(e, t, n, r, i, a) {
	var o = e[le];
	if (w || o !== n || o === void 0) {
		var s = Mr(n, r, a);
		w && s === e.getAttribute("class") || (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[le] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
// node_modules/svelte/src/internal/client/dom/elements/style.js
function Lr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Rr(e, t, n, r) {
	var i = e[ue];
	if (w || i !== t) {
		var a = Fr(t, r);
		w && a === e.getAttribute("style") || (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[ue] = t;
	} else r && (Array.isArray(r) ? (Lr(e, n?.[0], r[0]), Lr(e, n?.[1], r[1], "important")) : Lr(e, n, r));
	return r;
}
// node_modules/svelte/src/internal/client/dom/elements/attributes.js
var zr = Symbol("is custom element"), Br = Symbol("is html"), Vr = me ? "link" : "LINK";
function Hr(e) {
	if (w) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Ur(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Ur(e, "checked", null), e.checked = r;
				}
			}
		};
		e[fe] = n, k(n), Qe();
	}
}
function Ur(e, t, n, r) {
	var i = Wr(e);
	if (!(w && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Vr))) {
		var a = i[t];
		a !== (i[t] = n) && (t === "loading" && (e[se] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Kr(e).has(t) ? e[t] = n : (!w || typeof n != "number" && typeof n != "boolean" || a !== String(n)) && e.setAttribute(t, n));
	}
}
function Wr(e) {
	return e[ce] ??= {
		[zr]: e.nodeName.includes("-"),
		[Br]: e.namespaceURI === ge
	};
}
var Gr = /* @__PURE__ */ new Map();
function Kr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Gr.get(t);
	if (n) return n;
	Gr.set(t, n = /* @__PURE__ */ new Set());
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var s in r = o(i), r) r[s].set && s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
		i = l(i);
	}
	return n;
}
// node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function qr(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	et(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Jr(e) ? Yr(a) : a, n(a), j !== null && r.add(j), await Hn(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (w && e.defaultValue !== e.value || Gn(t) == null && e.value) && (n(Jr(e) ? Yr(e.value) : e.value), j !== null && r.add(j)), fn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = j;
			if (r.has(i)) return;
		}
		Jr(e) && n === Yr(e.value) || (e.type !== "date" || n || e.value) && n !== e.value && (e.value = n ?? "");
	});
}
function Jr(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Yr(e) {
	return e === "" ? null : +e;
}
function Xr(e) {
	O === null && Oe("onMount"), cn(() => {
		let t = Gn(e);
		if (typeof t == "function") return t;
	});
}
// node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
// src/lib/components/GoalProgressCircle.svelte
var Zr = /* @__PURE__ */ cr("<div class=\"progress-wrap svelte-1fzxcsk\"><div><span class=\"svelte-1fzxcsk\"> </span></div></div>");
function Qr(e, t) {
	let n = /* @__PURE__ */ ct(() => Math.max(0, Math.min(100, Math.round(t.achieved)))), r = /* @__PURE__ */ ct(() => Q(n) <= 15 ? "progress-red" : Q(n) <= 50 ? "progress-orange" : Q(n) <= 75 ? "progress-amber" : "progress-green");
	var i = Zr(), a = L(i), o = R(L(a));
	D(a), D(i), pn(() => {
		Ir(a, 1, `progress-circle ${Q(r)}`, "svelte-1fzxcsk"), Rr(a, `--progress: ${Q(n)}`), mr(o, `${Q(n) ?? ""}%`);
	}), $(e, i);
}
// src/lib/components/GoalCard.svelte
var $r = /* @__PURE__ */ cr("<p class=\"error svelte-15wmxzf\"> </p>"), ei = /* @__PURE__ */ cr("<h3 class=\"svelte-15wmxzf\">Edit goal</h3> <form class=\"goal-form svelte-15wmxzf\"><label class=\"svelte-15wmxzf\">Title <input type=\"text\" required=\"\" class=\"svelte-15wmxzf\"/></label> <label class=\"svelte-15wmxzf\">Description <textarea rows=\"3\" class=\"svelte-15wmxzf\"></textarea></label> <label class=\"svelte-15wmxzf\">Achieved (%) <input type=\"number\" min=\"0\" max=\"100\" class=\"svelte-15wmxzf\"/></label> <label class=\"svelte-15wmxzf\">End date <input type=\"date\" class=\"svelte-15wmxzf\"/></label> <div class=\"actions svelte-15wmxzf\"><button type=\"submit\" class=\"svelte-15wmxzf\"> </button> <button type=\"button\" class=\"secondary svelte-15wmxzf\">Cancel</button></div> <!></form>", 1), ti = /* @__PURE__ */ cr("<div class=\"card-top svelte-15wmxzf\"><h3 class=\"svelte-15wmxzf\"> </h3> <button type=\"button\" class=\"secondary svelte-15wmxzf\">Edit</button></div> <p class=\"description svelte-15wmxzf\"> </p> <p class=\"end-date svelte-15wmxzf\"> </p> <!>", 1), ni = /* @__PURE__ */ cr("<article class=\"goal-card svelte-15wmxzf\"><!></article>");
function ri(e, t) {
	Be(t, !0);
	let n = /* @__PURE__ */ P(!1), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P("");
	function a(e) {
		return {
			title: e.title,
			description: e.description,
			achieved: e.achieved,
			endDate: e.endDate
		};
	}
	let o = /* @__PURE__ */ P(Ht({
		title: "",
		description: "",
		achieved: 0,
		endDate: ""
	}));
	cn(() => {
		Q(n) || F(o, a(t.goal), !0);
	});
	function s(e) {
		if (!e) return "No end date";
		let [t, n, r] = e.split("-").map(Number);
		return new Date(t, n - 1, r).toLocaleDateString(void 0, {
			year: "numeric",
			month: "short",
			day: "numeric"
		});
	}
	function c(e) {
		return Number.isNaN(e) ? 0 : Math.min(100, Math.max(0, Math.round(e)));
	}
	function l() {
		F(n, !0), F(i, ""), F(o, {
			title: t.goal.title,
			description: t.goal.description,
			achieved: t.goal.achieved,
			endDate: t.goal.endDate
		}, !0);
	}
	function u() {
		F(n, !1), F(i, "");
	}
	async function d(e) {
		e.preventDefault(), F(r, !0), F(i, "");
		let a = await t.onSave(t.goal.id, {
			title: Q(o).title.trim(),
			description: Q(o).description.trim(),
			achieved: c(Q(o).achieved),
			endDate: Q(o).endDate
		});
		F(r, !1), a.ok ? F(n, !1) : F(i, a.error, !0);
	}
	var f = ni(), p = L(f), m = (e) => {
		var t = ei(), n = z(Xt(t), 2), a = L(n), s = z(L(a));
		Hr(s), D(a);
		var c = z(a, 2), l = z(L(c));
		Xe(l), D(c);
		var f = z(c, 2), p = z(L(f));
		Hr(p), D(f);
		var m = z(f, 2), h = z(L(m));
		Hr(h), D(m);
		var g = z(m, 2), _ = L(g), v = R(_, !0), y = z(_, 2);
		D(g);
		var b = z(g, 2), x = (e) => {
			var t = $r(), n = R(t, !0);
			pn(() => mr(n, Q(i))), $(e, t);
		};
		xr(b, (e) => {
			Q(i) && e(x);
		}), D(n), pn(() => {
			_.disabled = Q(r), mr(v, Q(r) ? "Saving..." : "Save"), y.disabled = Q(r);
		}), Qn("submit", n, d), qr(s, () => Q(o).title, (e) => Q(o).title = e), qr(l, () => Q(o).description, (e) => Q(o).description = e), qr(p, () => Q(o).achieved, (e) => Q(o).achieved = e), qr(h, () => Q(o).endDate, (e) => Q(o).endDate = e), $n("click", y, u), $(e, t);
	}, h = (e) => {
		var n = ti(), r = Xt(n), i = L(r), a = R(i, !0), o = z(i, 2);
		D(r);
		var c = z(r, 2), u = R(c, !0), d = z(c, 2), f = R(d);
		Qr(z(d, 2), { get achieved() {
			return t.goal.achieved;
		} }), pn((e) => {
			mr(a, t.goal.title), mr(u, t.goal.description || "No description"), mr(f, `End date: ${e ?? ""}`);
		}, [() => s(t.goal.endDate)]), $n("click", o, l), $(e, n);
	};
	xr(p, (e) => {
		Q(n) ? e(m) : e(h, -1);
	}), D(f), $(e, f), Ve();
}
er(["click"]);
// src/routes/+page.svelte
var ii = /* @__PURE__ */ cr("<p class=\"error svelte-1uha8ag\"> </p>"), ai = /* @__PURE__ */ cr("<p class=\"empty svelte-1uha8ag\">Loading goals...</p>"), oi = /* @__PURE__ */ cr("<p class=\"empty svelte-1uha8ag\">No goals yet. Add your first goal above.</p>"), si = /* @__PURE__ */ cr("<main class=\"page svelte-1uha8ag\"><header class=\"top svelte-1uha8ag\"><h1 class=\"svelte-1uha8ag\">Goal Tracker</h1> <p class=\"svelte-1uha8ag\">Track all your goals and their progress.</p></header> <section class=\"summary svelte-1uha8ag\"><div class=\"summary-item svelte-1uha8ag\"><span class=\"summary-label svelte-1uha8ag\">Total goals</span> <strong class=\"svelte-1uha8ag\"> </strong></div> <div class=\"summary-item svelte-1uha8ag\"><span class=\"summary-label svelte-1uha8ag\">Average achieved</span> <strong class=\"svelte-1uha8ag\"> </strong></div></section> <section class=\"panel svelte-1uha8ag\"><h2 class=\"svelte-1uha8ag\">Create goal</h2> <form class=\"goal-form svelte-1uha8ag\"><label class=\"svelte-1uha8ag\">Title <input type=\"text\" required=\"\" placeholder=\"Enter goal title\" class=\"svelte-1uha8ag\"/></label> <label class=\"svelte-1uha8ag\">Description <textarea rows=\"3\" placeholder=\"Describe your goal\" class=\"svelte-1uha8ag\"></textarea></label> <label class=\"svelte-1uha8ag\">Achieved (%) <input type=\"number\" min=\"0\" max=\"100\" class=\"svelte-1uha8ag\"/></label> <label class=\"svelte-1uha8ag\">End date <input type=\"date\" class=\"svelte-1uha8ag\"/></label> <button type=\"submit\" class=\"svelte-1uha8ag\">Create goal</button> <!></form></section> <!> <section class=\"cards svelte-1uha8ag\"><!></section></main>");
function ci(e, t) {
	Be(t, !0);
	let n = {
		title: "",
		description: "",
		achieved: 0,
		endDate: ""
	}, r = /* @__PURE__ */ P(Ht([])), i = /* @__PURE__ */ P(!0), a = /* @__PURE__ */ P(""), o = /* @__PURE__ */ P(""), s = /* @__PURE__ */ P(Ht({ ...n })), c = /* @__PURE__ */ ct(() => Q(r).length), l = /* @__PURE__ */ ct(() => Q(r).length > 0 ? Math.round(Q(r).reduce((e, t) => e + t.achieved, 0) / Q(r).length) : 0);
	function u(e) {
		return Number.isNaN(e) ? 0 : Math.min(100, Math.max(0, Math.round(e)));
	}
	function d(e) {
		return e instanceof Error ? e.message : "Unknown error";
	}
	async function f(e, t = {}) {
		let n = await fetch(`http://localhost:7001${e}`, {
			headers: {
				"Content-Type": "application/json",
				...t.headers || {}
			},
			...t
		}), r = (n.headers.get("content-type") || "").includes("application/json") ? await n.json() : null;
		if (!n.ok) {
			let e = r && typeof r == "object" && "error" in r ? r.error ?? `Request failed with status ${n.status}.` : `Request failed with status ${n.status}.`;
			throw Error(e);
		}
		return r;
	}
	async function p() {
		F(i, !0), F(a, "");
		try {
			F(r, await f("/goals"), !0);
		} catch (e) {
			F(a, d(e), !0);
		} finally {
			F(i, !1);
		}
	}
	async function m() {
		F(o, "");
		try {
			let e = await f("/goals", {
				method: "POST",
				body: JSON.stringify({
					title: Q(s).title.trim(),
					description: Q(s).description.trim(),
					achieved: u(Q(s).achieved),
					endDate: Q(s).endDate
				})
			});
			F(r, [e, ...Q(r)], !0), F(s, { ...n }, !0);
		} catch (e) {
			F(o, d(e), !0);
		}
	}
	async function h(e, t) {
		try {
			let n = await f(`/goals/${e}`, {
				method: "PUT",
				body: JSON.stringify({
					title: t.title.trim(),
					description: t.description.trim(),
					achieved: u(t.achieved),
					endDate: t.endDate
				})
			});
			return F(r, Q(r).map((t) => t.id === e ? n : t), !0), { ok: !0 };
		} catch (e) {
			return {
				ok: !1,
				error: d(e)
			};
		}
	}
	Xr(p);
	var g = si(), _ = z(L(g), 2), v = L(_), y = R(z(L(v), 2), !0);
	D(v);
	var b = z(v, 2), x = R(z(L(b), 2));
	D(b), D(_);
	var S = z(_, 2), ee = z(L(S), 2), te = L(ee), ne = z(L(te));
	Hr(ne), D(te);
	var re = z(te, 2), ie = z(L(re));
	Xe(ie), D(re);
	var ae = z(re, 2), oe = z(L(ae));
	Hr(oe), D(ae);
	var se = z(ae, 2), ce = z(L(se));
	Hr(ce), D(se);
	var le = z(se, 4), ue = (e) => {
		var t = ii(), n = R(t, !0);
		pn(() => mr(n, Q(o))), $(e, t);
	};
	xr(le, (e) => {
		Q(o) && e(ue);
	}), D(ee), D(S);
	var de = z(S, 2), fe = (e) => {
		var t = ii(), n = R(t, !0);
		pn(() => mr(n, Q(a))), $(e, t);
	};
	xr(de, (e) => {
		Q(a) && e(fe);
	});
	var pe = z(de, 2), me = L(pe), he = (e) => {
		$(e, ai());
	}, C = (e) => {
		$(e, oi());
	}, ge = (e) => {
		var t = lr();
		Tr(Xt(t), 17, () => Q(r), (e) => e.id, (e, t) => {
			ri(e, {
				get goal() {
					return Q(t);
				},
				onSave: h
			});
		}), $(e, t);
	};
	xr(me, (e) => {
		Q(i) ? e(he) : Q(r).length === 0 ? e(C, 1) : e(ge, -1);
	}), D(pe), D(g), pn(() => {
		mr(y, Q(c)), mr(x, `${Q(l) ?? ""}%`);
	}), Qn("submit", ee, (e) => {
		e.preventDefault(), m();
	}), qr(ne, () => Q(s).title, (e) => Q(s).title = e), qr(ie, () => Q(s).description, (e) => Q(s).description = e), qr(oe, () => Q(s).achieved, (e) => Q(s).achieved = e), qr(ce, () => Q(s).endDate, (e) => Q(s).endDate = e), $(e, g), Ve();
}
// src/single-spa.ts
var li;
async function ui() {}
async function di({ domElement: e }) {
	let t = await fetch(new URL(
		/* @vite-ignore */
		"./single-spa.css",
		import.meta.url
	));
	if (!t.ok) throw Error(`Could not load goals styles: ${t.status}`);
	let n = await t.text(), r = document.createElement("div"), i = r.attachShadow({ mode: "open" }), a = document.createElement("style");
	a.textContent = `:host { display: block; font-family: Inter, sans-serif; color: #111827; background: #eef2ff; } ${n}`, i.append(a), e.replaceChildren(r);
	try {
		li = hr(ci, { target: i });
	} catch (e) {
		throw r.remove(), e;
	}
}
async function fi({ domElement: e }) {
	try {
		li && await yr(li);
	} finally {
		li = void 0, e.replaceChildren();
	}
}
export { ui as bootstrap, di as mount, fi as unmount };
