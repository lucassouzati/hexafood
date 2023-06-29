--
-- PostgreSQL database dump
--

-- Dumped from database version 13.11
-- Dumped by pg_dump version 13.11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: userpg
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO userpg;

--
-- Name: categorias; Type: TABLE; Schema: public; Owner: userpg
--

CREATE TABLE public.categorias (
    id integer NOT NULL,
    nome text NOT NULL
);


ALTER TABLE public.categorias OWNER TO userpg;

--
-- Name: categorias_id_seq; Type: SEQUENCE; Schema: public; Owner: userpg
--

CREATE SEQUENCE public.categorias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categorias_id_seq OWNER TO userpg;

--
-- Name: categorias_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: userpg
--

ALTER SEQUENCE public.categorias_id_seq OWNED BY public.categorias.id;


--
-- Name: clientes; Type: TABLE; Schema: public; Owner: userpg
--

CREATE TABLE public.clientes (
    id integer NOT NULL,
    nome text NOT NULL,
    cpf text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.clientes OWNER TO userpg;

--
-- Name: clientes_id_seq; Type: SEQUENCE; Schema: public; Owner: userpg
--

CREATE SEQUENCE public.clientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clientes_id_seq OWNER TO userpg;

--
-- Name: clientes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: userpg
--

ALTER SEQUENCE public.clientes_id_seq OWNED BY public.clientes.id;


--
-- Name: produtos; Type: TABLE; Schema: public; Owner: userpg
--

CREATE TABLE public.produtos (
    id integer NOT NULL,
    nome text NOT NULL,
    id_categoria integer NOT NULL,
    valor double precision NOT NULL,
    descricao text NOT NULL,
    imagem text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.produtos OWNER TO userpg;

--
-- Name: produtos_id_seq; Type: SEQUENCE; Schema: public; Owner: userpg
--

CREATE SEQUENCE public.produtos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.produtos_id_seq OWNER TO userpg;

--
-- Name: produtos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: userpg
--

ALTER SEQUENCE public.produtos_id_seq OWNED BY public.produtos.id;


--
-- Name: categorias id; Type: DEFAULT; Schema: public; Owner: userpg
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id SET DEFAULT nextval('public.categorias_id_seq'::regclass);


--
-- Name: clientes id; Type: DEFAULT; Schema: public; Owner: userpg
--

ALTER TABLE ONLY public.clientes ALTER COLUMN id SET DEFAULT nextval('public.clientes_id_seq'::regclass);


--
-- Name: produtos id; Type: DEFAULT; Schema: public; Owner: userpg
--

ALTER TABLE ONLY public.produtos ALTER COLUMN id SET DEFAULT nextval('public.produtos_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: userpg
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
5a17841e-a287-47f8-a3d6-f5de43059fb6	3c18b6929e545452e47d5b38aa62609b5dcd061762c3a79ecfd799e88cdb2b7c	2023-06-28 23:58:17.265844+00	20230611003257_init	\N	\N	2023-06-28 23:58:17.207092+00	1
7881277f-8e92-4c86-9192-83433b906ae2	ac7223ebd4353e8496e64c03481c318234333e996c3ed4707f747039fdfb8646	2023-06-28 23:58:17.333909+00	20230628022303_add_categoria_table	\N	\N	2023-06-28 23:58:17.279743+00	1
fda858d8-6ed7-4e53-888e-d51cf001edfd	f2cedd904c36ecbf7b2cfceeb51d4001e02b03aa8847670865f0acd1bbee9518	2023-06-28 23:58:17.412669+00	20230628123806_20230628_produtos	\N	\N	2023-06-28 23:58:17.351237+00	1
52c3ec36-ff80-4256-b19b-a592563eb4a8	ad41b6d225a5649f41ca8f3bcc229add5c7340ec42deb319587208d7939a26d9	2023-06-28 23:58:17.447174+00	20230628130635_20230628_produto2	\N	\N	2023-06-28 23:58:17.427626+00	1
\.


--
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: userpg
--

COPY public.categorias (id, nome) FROM stdin;
1	Lanche
2	Acompanhamento
3	Bebida
4	Sobremesa
\.


--
-- Data for Name: clientes; Type: TABLE DATA; Schema: public; Owner: userpg
--

COPY public.clientes (id, nome, cpf, "createdAt") FROM stdin;
\.


--
-- Data for Name: produtos; Type: TABLE DATA; Schema: public; Owner: userpg
--

COPY public.produtos (id, nome, id_categoria, valor, descricao, imagem, "createdAt", "updatedAt") FROM stdin;
1	Hexa Lanche Feliz	1	19.95	O clássico: pão, carne, e queijo.	https://images.unsplash.com/photo-1605789538467-f715d58e03f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80	2023-06-29 00:17:56.159	2023-06-29 00:17:56.159
2	Big Hexa Duplo	1	29.9	Dois hambúrgueres, salada, muito queijo.	https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80	2023-06-29 00:17:56.159	2023-06-29 00:17:56.159
3	Big Hexa	1	25.9	Hambúrguer, salada, queijo.	https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80	2023-06-29 00:17:56.159	2023-06-29 00:17:56.159
4	Hexa Dog	1	12.9	Cachorro quente minimalista	https://images.unsplash.com/photo-1612392062422-ef19b42f74df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80	2023-06-29 00:17:56.159	2023-06-29 00:17:56.159
5	Chips de batata	2	9.9	Deliciosamente crocantes (300g)	https://images.unsplash.com/photo-1528751014936-863e6e7a319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80	2023-06-29 00:21:33.137	2023-06-29 00:21:33.137
6	Batata frita	2	15.9	Deliciosamente crocantes (400g)	https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80	2023-06-29 00:21:33.137	2023-06-29 00:21:33.137
7	Onion rings	2	21.9	Deliciosamente crocantes (400g)	https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80	2023-06-29 00:21:33.137	2023-06-29 00:21:33.137
8	Água sem gás 500ml	3	4.5	Para matar a sede	https://images.unsplash.com/photo-1561041695-d2fadf9f318c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80	2023-06-29 00:24:15.076	2023-06-29 00:24:15.076
9	Hexa Bier 300ml	3	15.9	Produção local	https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80	2023-06-29 00:24:15.076	2023-06-29 00:24:15.076
10	Hexa Bier 500ml	3	21.9	Produção local	https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80	2023-06-29 00:24:15.076	2023-06-29 00:24:15.076
11	Hexa Brownie	4	14.5	Brownie de chocolate com duas bolas de sorvete	https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80	2023-06-29 00:25:21.425	2023-06-29 00:25:21.425
\.


--
-- Name: categorias_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userpg
--

SELECT pg_catalog.setval('public.categorias_id_seq', 4, true);


--
-- Name: clientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userpg
--

SELECT pg_catalog.setval('public.clientes_id_seq', 1, false);


--
-- Name: produtos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userpg
--

SELECT pg_catalog.setval('public.produtos_id_seq', 11, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: userpg
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: userpg
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);


--
-- Name: clientes clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: userpg
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id);


--
-- Name: produtos produtos_pkey; Type: CONSTRAINT; Schema: public; Owner: userpg
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (id);


--
-- Name: clientes_cpf_key; Type: INDEX; Schema: public; Owner: userpg
--

CREATE UNIQUE INDEX clientes_cpf_key ON public.clientes USING btree (cpf);


--
-- Name: produtos produtos_id_categoria_fkey; Type: FK CONSTRAINT; Schema: public; Owner: userpg
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

