PGDMP                      }            postgres    15.8    17.0 S    )           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            *           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            +           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            ,           1262    29203    postgres    DATABASE     t   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE postgres;
                     postgres    false            -           0    0    DATABASE postgres    ACL     2   GRANT ALL ON DATABASE postgres TO dashboard_user;
                        postgres    false    3884                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     pg_database_owner    false            .           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        pg_database_owner    false    20            /           0    0    SCHEMA public    ACL     �   GRANT USAGE ON SCHEMA public TO postgres;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;
                        pg_database_owner    false    20                       1259    29851    application_classifier    TABLE     �   CREATE TABLE public.application_classifier (
    application_id bigint NOT NULL,
    classifier_item_id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
 *   DROP TABLE public.application_classifier;
       public         heap r       postgres    false    20            0           0    0    TABLE application_classifier    ACL     [  GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.application_classifier TO anon;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.application_classifier TO authenticated;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.application_classifier TO service_role;
          public               postgres    false    268                       1259    29855    applications    TABLE     �   CREATE TABLE public.applications (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description text,
    business_line_id bigint,
    vendor_id bigint
);
     DROP TABLE public.applications;
       public         heap r       postgres    false    20            1           0    0    TABLE applications    ACL     =  GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.applications TO anon;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.applications TO authenticated;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.applications TO service_role;
          public               postgres    false    269                       1259    29861    applications_id_seq    SEQUENCE     �   ALTER TABLE public.applications ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.applications_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    20    269            2           0    0    SEQUENCE applications_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.applications_id_seq TO anon;
GRANT ALL ON SEQUENCE public.applications_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.applications_id_seq TO service_role;
          public               postgres    false    270                       1259    29862    business_lines    TABLE     �   CREATE TABLE public.business_lines (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description character varying
);
 "   DROP TABLE public.business_lines;
       public         heap r       postgres    false    20            3           0    0    TABLE business_lines    ACL     C  GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.business_lines TO anon;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.business_lines TO authenticated;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.business_lines TO service_role;
          public               postgres    false    271                       1259    29868    business_lines_id_seq    SEQUENCE     �   ALTER TABLE public.business_lines ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.business_lines_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    20    271            4           0    0    SEQUENCE business_lines_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.business_lines_id_seq TO anon;
GRANT ALL ON SEQUENCE public.business_lines_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.business_lines_id_seq TO service_role;
          public               postgres    false    272                       1259    29876 
   classifier    TABLE     �   CREATE TABLE public.classifier (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description character varying
);
    DROP TABLE public.classifier;
       public         heap r       postgres    false    20            5           0    0    TABLE classifier    ACL     7  GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.classifier TO anon;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.classifier TO authenticated;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.classifier TO service_role;
          public               postgres    false    275                       1259    29869    classifier_items    TABLE     �   CREATE TABLE public.classifier_items (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying,
    description character varying,
    classifier_id bigint
);
 $   DROP TABLE public.classifier_items;
       public         heap r       postgres    false    20            6           0    0    TABLE classifier_items    ACL     I  GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.classifier_items TO anon;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.classifier_items TO authenticated;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.classifier_items TO service_role;
          public               postgres    false    273                       1259    29875    classifier_items_id_seq    SEQUENCE     �   ALTER TABLE public.classifier_items ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.classifier_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    20    273            7           0    0     SEQUENCE classifier_items_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.classifier_items_id_seq TO anon;
GRANT ALL ON SEQUENCE public.classifier_items_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.classifier_items_id_seq TO service_role;
          public               postgres    false    274                       1259    29882    classifiers_id_seq    SEQUENCE     �   ALTER TABLE public.classifier ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.classifiers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    275    20            8           0    0    SEQUENCE classifiers_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.classifiers_id_seq TO anon;
GRANT ALL ON SEQUENCE public.classifiers_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.classifiers_id_seq TO service_role;
          public               postgres    false    276            !           1259    31374    country    TABLE     2  CREATE TABLE public.country (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description character varying,
    descr_inter character varying,
    code smallint,
    code_2 character varying,
    code_3 character varying
);
    DROP TABLE public.country;
       public         heap r       postgres    false    20            9           0    0    TABLE country    ACL     .  GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.country TO anon;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.country TO authenticated;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.country TO service_role;
          public               postgres    false    289            "           1259    31377    country_id_seq    SEQUENCE     �   ALTER TABLE public.country ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.country_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    20    289            :           0    0    SEQUENCE country_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.country_id_seq TO anon;
GRANT ALL ON SEQUENCE public.country_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.country_id_seq TO service_role;
          public               postgres    false    290                       1259    29883    vendors    TABLE     �   CREATE TABLE public.vendors (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description character varying,
    domain character varying,
    country_id bigint
);
    DROP TABLE public.vendors;
       public         heap r       postgres    false    20            ;           0    0    TABLE vendors    ACL     .  GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.vendors TO anon;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.vendors TO authenticated;
GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLE public.vendors TO service_role;
          public               postgres    false    277                       1259    29889    vendors_id_seq    SEQUENCE     �   ALTER TABLE public.vendors ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.vendors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    20    277            <           0    0    SEQUENCE vendors_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.vendors_id_seq TO anon;
GRANT ALL ON SEQUENCE public.vendors_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.vendors_id_seq TO service_role;
          public               postgres    false    278                      0    29851    application_classifier 
   TABLE DATA           `   COPY public.application_classifier (application_id, classifier_item_id, created_at) FROM stdin;
    public               postgres    false    268   �p                 0    29855    applications 
   TABLE DATA           f   COPY public.applications (id, created_at, name, description, business_line_id, vendor_id) FROM stdin;
    public               postgres    false    269   �p                 0    29862    business_lines 
   TABLE DATA           K   COPY public.business_lines (id, created_at, name, description) FROM stdin;
    public               postgres    false    271   �q       !          0    29876 
   classifier 
   TABLE DATA           G   COPY public.classifier (id, created_at, name, description) FROM stdin;
    public               postgres    false    275   ~r                 0    29869    classifier_items 
   TABLE DATA           \   COPY public.classifier_items (id, created_at, name, description, classifier_id) FROM stdin;
    public               postgres    false    273   Vs       %          0    31374    country 
   TABLE DATA           g   COPY public.country (id, created_at, name, description, descr_inter, code, code_2, code_3) FROM stdin;
    public               postgres    false    289   �t       #          0    29883    vendors 
   TABLE DATA           X   COPY public.vendors (id, created_at, name, description, domain, country_id) FROM stdin;
    public               postgres    false    277   �t       =           0    0    applications_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.applications_id_seq', 5, true);
          public               postgres    false    270            >           0    0    business_lines_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.business_lines_id_seq', 4, true);
          public               postgres    false    272            ?           0    0    classifier_items_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.classifier_items_id_seq', 6, true);
          public               postgres    false    274            @           0    0    classifiers_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.classifiers_id_seq', 2, true);
          public               postgres    false    276            A           0    0    country_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.country_id_seq', 1, false);
          public               postgres    false    290            B           0    0    vendors_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.vendors_id_seq', 3, true);
          public               postgres    false    278            \           2606    29993 2   application_classifier application_classifier_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.application_classifier
    ADD CONSTRAINT application_classifier_pkey PRIMARY KEY (application_id, classifier_item_id);
 \   ALTER TABLE ONLY public.application_classifier DROP CONSTRAINT application_classifier_pkey;
       public                 postgres    false    268    268            ^           2606    29995 "   applications applications_name_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_name_key UNIQUE (name);
 L   ALTER TABLE ONLY public.applications DROP CONSTRAINT applications_name_key;
       public                 postgres    false    269            `           2606    29997    applications applications_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.applications DROP CONSTRAINT applications_pkey;
       public                 postgres    false    269            b           2606    29999 &   business_lines business_lines_name_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.business_lines
    ADD CONSTRAINT business_lines_name_key UNIQUE (name);
 P   ALTER TABLE ONLY public.business_lines DROP CONSTRAINT business_lines_name_key;
       public                 postgres    false    271            d           2606    30001 "   business_lines business_lines_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.business_lines
    ADD CONSTRAINT business_lines_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.business_lines DROP CONSTRAINT business_lines_pkey;
       public                 postgres    false    271            f           2606    30003 &   classifier_items classifier_items_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.classifier_items
    ADD CONSTRAINT classifier_items_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.classifier_items DROP CONSTRAINT classifier_items_pkey;
       public                 postgres    false    273            h           2606    30005    classifier classifiers_name_key 
   CONSTRAINT     Z   ALTER TABLE ONLY public.classifier
    ADD CONSTRAINT classifiers_name_key UNIQUE (name);
 I   ALTER TABLE ONLY public.classifier DROP CONSTRAINT classifiers_name_key;
       public                 postgres    false    275            j           2606    30007    classifier classifiers_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.classifier
    ADD CONSTRAINT classifiers_pkey PRIMARY KEY (id);
 E   ALTER TABLE ONLY public.classifier DROP CONSTRAINT classifiers_pkey;
       public                 postgres    false    275            p           2606    31385    country country_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.country DROP CONSTRAINT country_pkey;
       public                 postgres    false    289            l           2606    30009    vendors vendors_name_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT vendors_name_key UNIQUE (name);
 B   ALTER TABLE ONLY public.vendors DROP CONSTRAINT vendors_name_key;
       public                 postgres    false    277            n           2606    30011    vendors vendors_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT vendors_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.vendors DROP CONSTRAINT vendors_pkey;
       public                 postgres    false    277            q           2606    30132 A   application_classifier application_classifier_application_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.application_classifier
    ADD CONSTRAINT application_classifier_application_id_fkey FOREIGN KEY (application_id) REFERENCES public.applications(id) ON DELETE RESTRICT;
 k   ALTER TABLE ONLY public.application_classifier DROP CONSTRAINT application_classifier_application_id_fkey;
       public               postgres    false    268    3680    269            r           2606    30137 E   application_classifier application_classifier_classifier_item_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.application_classifier
    ADD CONSTRAINT application_classifier_classifier_item_id_fkey FOREIGN KEY (classifier_item_id) REFERENCES public.classifier_items(id) ON DELETE RESTRICT;
 o   ALTER TABLE ONLY public.application_classifier DROP CONSTRAINT application_classifier_classifier_item_id_fkey;
       public               postgres    false    268    3686    273            s           2606    30142 /   applications applications_business_line_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_business_line_id_fkey FOREIGN KEY (business_line_id) REFERENCES public.business_lines(id) ON DELETE RESTRICT;
 Y   ALTER TABLE ONLY public.applications DROP CONSTRAINT applications_business_line_id_fkey;
       public               postgres    false    269    3684    271            t           2606    30147 (   applications applications_vendor_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_vendor_id_fkey FOREIGN KEY (vendor_id) REFERENCES public.vendors(id) ON DELETE RESTRICT;
 R   ALTER TABLE ONLY public.applications DROP CONSTRAINT applications_vendor_id_fkey;
       public               postgres    false    269    3694    277            u           2606    30152 4   classifier_items classifier_items_classifier_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.classifier_items
    ADD CONSTRAINT classifier_items_classifier_id_fkey FOREIGN KEY (classifier_id) REFERENCES public.classifier(id) ON DELETE RESTRICT;
 ^   ALTER TABLE ONLY public.classifier_items DROP CONSTRAINT classifier_items_classifier_id_fkey;
       public               postgres    false    273    3690    275            v           2606    31386    vendors vendors_country_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.vendors
    ADD CONSTRAINT vendors_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.country(id);
 I   ALTER TABLE ONLY public.vendors DROP CONSTRAINT vendors_country_id_fkey;
       public               postgres    false    277    289    3696                       3256    30177 -   applications Enable read access for all users    POLICY     a   CREATE POLICY "Enable read access for all users" ON public.applications FOR SELECT USING (true);
 G   DROP POLICY "Enable read access for all users" ON public.applications;
       public               postgres    false    269                       3256    30178 /   business_lines Enable read access for all users    POLICY     c   CREATE POLICY "Enable read access for all users" ON public.business_lines FOR SELECT USING (true);
 I   DROP POLICY "Enable read access for all users" ON public.business_lines;
       public               postgres    false    271                       3256    30179    applications all    POLICY     K   CREATE POLICY "all" ON public.applications USING (true) WITH CHECK (true);
 *   DROP POLICY "all" ON public.applications;
       public               postgres    false    269                       3256    30180    business_lines all    POLICY     M   CREATE POLICY "all" ON public.business_lines USING (true) WITH CHECK (true);
 ,   DROP POLICY "all" ON public.business_lines;
       public               postgres    false    271                       3256    30267    classifier all    POLICY     I   CREATE POLICY "all" ON public.classifier USING (true) WITH CHECK (true);
 (   DROP POLICY "all" ON public.classifier;
       public               postgres    false    275                       3256    30268    classifier_items all    POLICY     O   CREATE POLICY "all" ON public.classifier_items USING (true) WITH CHECK (true);
 .   DROP POLICY "all" ON public.classifier_items;
       public               postgres    false    273                       0    29851    application_classifier    ROW SECURITY     D   ALTER TABLE public.application_classifier ENABLE ROW LEVEL SECURITY;          public               postgres    false    268                       0    29855    applications    ROW SECURITY     :   ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;          public               postgres    false    269                       0    29862    business_lines    ROW SECURITY     <   ALTER TABLE public.business_lines ENABLE ROW LEVEL SECURITY;          public               postgres    false    271                       0    29876 
   classifier    ROW SECURITY     8   ALTER TABLE public.classifier ENABLE ROW LEVEL SECURITY;          public               postgres    false    275                       0    29869    classifier_items    ROW SECURITY     >   ALTER TABLE public.classifier_items ENABLE ROW LEVEL SECURITY;          public               postgres    false    273                       0    31374    country    ROW SECURITY     5   ALTER TABLE public.country ENABLE ROW LEVEL SECURITY;          public               postgres    false    289                       0    29883    vendors    ROW SECURITY     5   ALTER TABLE public.vendors ENABLE ROW LEVEL SECURITY;          public               postgres    false    277            �	           826    30200     DEFAULT PRIVILEGES FOR SEQUENCES    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO service_role;
          public               postgres    false    20            �	           826    30201     DEFAULT PRIVILEGES FOR SEQUENCES    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES TO service_role;
          public               supabase_admin    false    20            �	           826    30202     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO service_role;
          public               postgres    false    20            �	           826    30203     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS TO service_role;
          public               supabase_admin    false    20            �	           826    30204    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     I  ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO service_role;
          public               postgres    false    20            �	           826    30205    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     a  ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO service_role;
          public               supabase_admin    false    20               O   x�e̹�0��p�s2�����/T��..��h��c'a�J��K_E��'(\ő�B������Q��LUo�?         �   x�]��n�0F����b��9�A�X�J�#�KSA)�o_�T�B��w��E OZy����!R�*��V��	������\�/`@C�X)8�3�pH<Nc.U���?�2��!~-d�1�FY�@�t9[^W-�tO ����#�k���m�[�۔��잍��"E�^�|C�L��n:�t����wޗa��4�˭�sƘ��C         �   x�]ͽ
� ��Y�"{�x��^@�Lf�"�A�ڠ�лo+���Y��=�er�|d0 �,"�VZ_(E��|ڢ߇��[��>b4��6b�E�Ck�����G��.�W�B��/����B�΋E�/,5�K�T��a�Ǳ�{H���߻���*:�      !   �   x�e�A�0E���H)T��x1F7&ƭM\#��
�7�+��v濟�?:�J�Xe���4+���MR��(3Q*��-a�F�;z��X�r+��p&%5ὑ����h��0��AK*��@�ӣ�V��5����xJ\q�o����$3y1��dG��3��~g�P�J�ݎ{�]>����켓x/���;�<��W�E"�� �F��           x�e��N�0�g�)<�P-��$$#;0�v������t�,�1� �7H���o�9�Bmd��;���S$�3�gq�SHR8:6
���첨뢴<�����l~�T��TZ�J	H��W]/�jѐn/0S�����h�����W������8�;���T��1Jy��$���6nM���uϞ���7��7�č�\��DZp����H���]⎊���:i��sk�Q|����|,�)WU���5L�JKJ�����y]�oa��Yy�,mn��\A� ���      %      x������ � �      #   �   x�e�=�@��z��eg',,��'�� RC0���$�ހ����>n�BK3�L��K�h��Cc2Y�fD*!k]��Z��O��)�y<�z�+>~yc;�Q5�>���mU�T�P�!�F�e��r��Ҝ�����嶨��/Yl�!N'F�	�S�JJ�1�C,     