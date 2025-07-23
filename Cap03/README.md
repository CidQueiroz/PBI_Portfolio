# Capítulo 03: Dashboard de Vendas com Modelo Relacional

Este projeto representa um avanço em relação ao capítulo anterior, focando na criação de um dashboard a partir de múltiplas fontes de dados. O principal objetivo é construir um modelo de dados relacional (esquema estrela) para permitir análises de vendas mais complexas e segmentadas.

## 📁 Fontes de Dados

*   `Clientes.csv`: Tabela de dimensão com informações sobre os clientes.
*   `Produtos.csv`: Tabela de dimensão com detalhes dos produtos.
*   `Pedidos.csv`: Tabela de fatos contendo os dados de cada pedido.
*   `Vendas.csv`: Tabela de fatos com os dados de vendas, ligando clientes, produtos e pedidos.

## 🎯 Habilidades e Conceitos Abordados

*   **Modelagem de Dados (Esquema Estrela):** Criação de um modelo de dados coeso, definindo relacionamentos entre tabelas de fatos e dimensões.
*   **Importação e ETL com Power Query:** Conexão com múltiplas fontes de dados em formato `.csv` e realização de transformações para preparar os dados para a modelagem.
*   **Criação de Relacionamentos:** Definição das chaves primárias e estrangeiras para conectar as tabelas e garantir a integridade do modelo.
*   **DAX (Data Analysis Expressions):** Utilização de DAX para criar medidas essenciais (ex: Total de Vendas, Quantidade de Pedidos) e colunas calculadas para enriquecer a análise.
*   **Visualização de Dados:** Desenvolvimento de um dashboard interativo com diferentes visuais para explorar os dados de vendas por cliente, produto e outras dimensões.

## 📈 Estrutura do Modelo

*   **Tabelas Fato:** `Vendas`, `Pedidos` (contêm as métricas quantitativas).
*   **Tabelas Dimensão:** `Clientes`, `Produtos` (contêm os atributos descritivos para segmentação e filtro).
