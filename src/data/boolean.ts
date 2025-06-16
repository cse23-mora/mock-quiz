export const boolean = [
    {
        id: "ba001",
        questionText: "According to De Morgan's first law, \\( \\overline{A + B} \\) is equivalent to:",
        options: [
            "\\( \\overline{A} + \\overline{B} \\)",
            "\\( \\overline{A} \\cdot \\overline{B} \\)",
            "\\( A \\cdot B \\)",
            "\\( A + B \\)"
        ],
        correctAnswerIndex: 1,
        explanation: "De Morgan's first law states that the complement of a sum equals the product of complements: \\( \\overline{A + B} = \\overline{A} \\cdot \\overline{B} \\)"
    },
    {
        id: "ba002",
        questionText: "According to De Morgan's second law, \\( \\overline{A \\cdot B} \\) is equivalent to:",
        options: [
            "\\( \\overline{A} \\cdot \\overline{B} \\)",
            "\\( \\overline{A} + \\overline{B} \\)",
            "\\( A + B \\)",
            "\\( A \\cdot B \\)"
        ],
        correctAnswerIndex: 1,
        explanation: "De Morgan's second law states that the complement of a product equals the sum of complements: \\( \\overline{A \\cdot B} = \\overline{A} + \\overline{B} \\)"
    },
    {
        id: "ba003",
        questionText: "The absorption law \\( A + A \\cdot B \\) simplifies to:",
        options: [
            "\\( A \\)",
            "\\( B \\)",
            "\\( A \\cdot B \\)",
            "\\( A + B \\)"
        ],
        correctAnswerIndex: 0,
        explanation: "By the absorption law, \\( A + A \\cdot B = A \\). This can be proven by factoring: \\( A(1 + B) = A \\cdot 1 = A \\)"
    },
    {
        id: "ba004",
        questionText: "The absorption law \\( A \\cdot (A + B) \\) simplifies to:",
        options: [
            "\\( A + B \\)",
            "\\( A \\cdot B \\)",
            "\\( A \\)",
            "\\( B \\)"
        ],
        correctAnswerIndex: 2,
        explanation: "By the absorption law, \\( A \\cdot (A + B) = A \\). Using distribution: \\( A \\cdot A + A \\cdot B = A + A \\cdot B = A \\)"
    },
    {
        id: "ba005",
        questionText: "If the dual of \\( A + B \\cdot C \\) is found, what is the result?",
        options: [
            "\\( A \\cdot B + C \\)",
            "\\( A \\cdot (B + C) \\)",
            "\\( A + B \\cdot C \\)",
            "\\( (A + B) \\cdot C \\)"
        ],
        correctAnswerIndex: 1,
        explanation: "To find the dual, replace + with ·, · with +, 0 with 1, and 1 with 0. The dual of \\( A + B \\cdot C \\) is \\( A \\cdot (B + C) \\)"
    },
    {
        id: "ba006",
        questionText: "What is the complement of \\( A \\cdot B + C \\cdot D \\) using De Morgan's laws?",
        options: [
            "\\( (\\overline{A} + \\overline{B}) \\cdot (\\overline{C} + \\overline{D}) \\)",
            "\\( \\overline{A} \\cdot \\overline{B} + \\overline{C} \\cdot \\overline{D} \\)",
            "\\( \\overline{A} + \\overline{B} \\cdot \\overline{C} + \\overline{D} \\)",
            "\\( (A + B) \\cdot (C + D) \\)"
        ],
        correctAnswerIndex: 0,
        explanation: "Using De Morgan's laws: \\( \\overline{A \\cdot B + C \\cdot D} = \\overline{A \\cdot B} \\cdot \\overline{C \\cdot D} = (\\overline{A} + \\overline{B}) \\cdot (\\overline{C} + \\overline{D}) \\)"
    },
    {
        id: "ba007",
        questionText: "The expression \\( A + \\overline{A} \\cdot B \\) simplifies to:",
        options: [
            "\\( A \\)",
            "\\( B \\)",
            "\\( A + B \\)",
            "\\( A \\cdot B \\)"
        ],
        correctAnswerIndex: 2,
        explanation: "Using consensus theorem: \\( A + \\overline{A} \\cdot B = A + B \\). This can be proven by cases: when A=1, result is 1; when A=0, result is B."
    },
    {
        id: "ba008",
        questionText: "Which of the following is the Sum of Products (SOP) form?",
        options: [
            "\\( (A + B) \\cdot (C + D) \\)",
            "\\( A \\cdot B + C \\cdot D \\)",
            "\\( A + B \\cdot C \\)",
            "\\( A \\cdot (B + C \\cdot D) \\)"
        ],
        correctAnswerIndex: 1,
        explanation: "Sum of Products (SOP) form consists of OR operations between AND terms (products). \\( A \\cdot B + C \\cdot D \\) is in canonical SOP form."
    },
    {
        id: "ba009",
        questionText: "Which of the following is the Product of Sums (POS) form?",
        options: [
            "\\( A \\cdot B + C \\cdot D \\)",
            "\\( (A + B) \\cdot (C + D) \\)",
            "\\( A + B \\cdot C \\)",
            "\\( A \\cdot B \\cdot C \\)"
        ],
        correctAnswerIndex: 1,
        explanation: "Product of Sums (POS) form consists of AND operations between OR terms (sums). \\( (A + B) \\cdot (C + D) \\) is in canonical POS form."
    },
    {
        id: "ba010",
        questionText: "The expression \\( A \\cdot (A + B) \\) can be simplified using which law?",
        options: [
            "Commutative Law",
            "Associative Law",
            "Absorption Law",
            "Distributive Law"
        ],
        correctAnswerIndex: 2,
        explanation: "This is a direct application of the absorption law: \\( A \\cdot (A + B) = A \\)",
    },
    {
        id: "ba011",
        questionText: "What is \\( \\overline{\\overline{A} + B \\cdot \\overline{C}} \\) when simplified using De Morgan's laws?",
        options: [
            "\\( A \\cdot (\\overline{B} + C) \\)",
            "\\( A + \\overline{B} \\cdot C \\)",
            "\\( A \\cdot \\overline{B} + C \\)",
            "\\( \\overline{A} \\cdot (B + \\overline{C}) \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "Applying De Morgan's law: \\( \\overline{\\overline{A} + B \\cdot \\overline{C}} = \\overline{\\overline{A}} \\cdot \\overline{B \\cdot \\overline{C}} = A \\cdot (\\overline{B} + C) \\)",
    },
    {
        id: "ba012",
        questionText: "The expression \\( A \\cdot B + A \\cdot \\overline{B} \\) simplifies to:",
        options: [
            "\\( A \\)",
            "\\( B \\)",
            "\\( A + B \\)",
            "\\( 0 \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "Using factoring and complement law: \\( A \\cdot B + A \\cdot \\overline{B} = A(B + \\overline{B}) = A \\cdot 1 = A \\)",
    },
    {
        id: "ba013",
        questionText: "What is the dual of the expression \\( A \\cdot B + A \\cdot C + B \\cdot C \\)?",
        options: [
            "\\( (A + B) \\cdot (A + C) \\cdot (B + C) \\)",
            "\\( A + B \\cdot A + C \\cdot B + C \\)",
            "\\( \\overline{A} + \\overline{B} \\cdot \\overline{C} \\)",
            "\\( A \\cdot B \\cdot C \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "To find the dual, replace + with · and · with +: \\( (A + B) \\cdot (A + C) \\cdot (B + C) \\)",
    },
    {
        id: "ba014",
        questionText: "The consensus theorem states that \\( A \\cdot B + \\overline{A} \\cdot C + B \\cdot C \\) equals:",
        options: [
            "\\( A \\cdot B + \\overline{A} \\cdot C \\)",
            "\\( A \\cdot B + B \\cdot C \\)",
            "\\( \\overline{A} \\cdot C + B \\cdot C \\)",
            "\\( A \\cdot B + \\overline{A} \\cdot C + B \\cdot C \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "By the consensus theorem, the term \\( B \\cdot C \\) is redundant and can be eliminated: \\( A \\cdot B + \\overline{A} \\cdot C + B \\cdot C = A \\cdot B + \\overline{A} \\cdot C \\)",
    },
    {
        id: "ba015",
        questionText: "Which law is demonstrated by \\( A + B = B + A \\)?",
        options: [
            "Associative Law",
            "Commutative Law",
            "Distributive Law",
            "Identity Law"
        ],
        correctAnswerIndex: 1,
        explanation: "The commutative law states that the order of operands can be changed without affecting the result."
    },
    {
        id: "ba016",
        questionText: "The expression \\( (A + B) \\cdot (A + \\overline{B}) \\) simplifies to:",
        options: [
            "\\( A \\)",
            "\\( B \\)",
            "\\( A + B \\)",
            "\\( A \\cdot B \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "Using distribution: \\( (A + B) \\cdot (A + \\overline{B}) = A + B \\cdot \\overline{B} = A + 0 = A \\)",
    },
    {
        id: "ba017",
        questionText: "What is \\( A + A \\cdot B + \\overline{A} \\cdot C \\) simplified?",
        options: [
            "\\( A + C \\)",
            "\\( A + B + C \\)",
            "\\( A + \\overline{A} \\cdot C \\)",
            "\\( A \\cdot B + C \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "Using absorption law: \\( A + A \\cdot B = A \\), so \\( A + A \\cdot B + \\overline{A} \\cdot C = A + \\overline{A} \\cdot C \\). By consensus: \\( A + \\overline{A} \\cdot C = A + C \\)"
    },
    {
        id: "ba018",
        questionText: "The complement of \\( (A + B) \\cdot (C + D) \\) is:",
        options: [
            "\\( (\\overline{A} \\cdot \\overline{B}) + (\\overline{C} \\cdot \\overline{D}) \\)",
            "\\( (\\overline{A} + \\overline{B}) \\cdot (\\overline{C} + \\overline{D}) \\)",
            "\\( \\overline{A} \\cdot \\overline{B} \\cdot \\overline{C} \\cdot \\overline{D} \\)",
            "\\( \\overline{A} + \\overline{B} + \\overline{C} + \\overline{D} \\)"
        ],
        correctAnswerIndex: 0,
        explanation: "Using De Morgan's law: \\( \\overline{(A + B) \\cdot (C + D)} = \\overline{(A + B)} + \\overline{(C + D)} = (\\overline{A} \\cdot \\overline{B}) + (\\overline{C} \\cdot \\overline{D}) \\)"
    },
    {
        id: "ba019",
        questionText: "Which expression represents the canonical SOP form for a 3-variable function?",
        options: [
            "\\( A \\cdot B \\cdot C + A \\cdot \\overline{B} \\cdot C \\)",
            "\\( (A + B + C) \\cdot (A + B + \\overline{C}) \\)",
            "\\( A + B \\cdot C \\)",
            "\\( A \\cdot (B + C) \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "Canonical SOP form has all variables (or their complements) in each product term. Option A shows minterms with all three variables."
    },
    {
        id: "ba020",
        questionText: "The expression \\( A \\cdot 0 \\) equals:",
        options: [
            "\\( A \\)",
            "\\( 0 \\)",
            "\\( 1 \\)",
            "\\( \\overline{A} \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "By the null law (annulment law), any variable ANDed with 0 equals 0: \\( A \\cdot 0 = 0 \\)",
    },
    {
        id: "ba021",
        questionText: "The expression \\( A + 1 \\) equals:",
        options: [
            "\\( A \\)",
            "\\( 0 \\)",
            "\\( 1 \\)",
            "\\( \\overline{A} \\)",
        ],
        correctAnswerIndex: 2,
        explanation: "By the null law (annulment law), any variable ORed with 1 equals 1: \\( A + 1 = 1 \\)",
    },
    {
        id: "ba022",
        questionText: "What is the simplified form of \\( A \\cdot B + A \\cdot \\overline{B} \\cdot C \\)?",
        options: [
            "\\( A \\cdot (B + C) \\)",
            "\\( A + B \\cdot C \\)",
            "\\( A \\cdot B + A \\cdot C \\)",
            "\\( A \\cdot (B + \\overline{B} \\cdot C) \\)",
        ],
        correctAnswerIndex: 3,
        explanation: "Factoring out A: \\( A \\cdot B + A \\cdot \\overline{B} \\cdot C = A \\cdot (B + \\overline{B} \\cdot C) \\). This can be further simplified to \\( A \\cdot (B + C) \\) using consensus."
    },
    {
        id: "ba023",
        questionText: "The idempotent law states that \\( A + A \\) equals:",
        options: [
            "\\( 2A \\)",
            "\\( A \\)",
            "\\( 0 \\)",
            "\\( 1 \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "The idempotent law states that \\( A + A = A \\) and \\( A \\cdot A = A \\)",
    },
    {
        id: "ba024",
        questionText: "Converting \\( A \\cdot B + \\overline{A} \\cdot C \\) to POS form gives:",
        options: [
            "\\( (A + C) \\cdot (\\overline{A} + B) \\cdot (B + C) \\)",
            "\\( (A + C) \\cdot (B + \\overline{A}) \\)",
            "\\( A \\cdot B + \\overline{A} \\cdot C \\)",
            "\\( (A + B) \\cdot (\\overline{A} + C) \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "To convert SOP to POS, we can use Boolean algebra or truth table method. The complete POS form is \\( (A + C) \\cdot (\\overline{A} + B) \\cdot (B + C) \\)",
    },
    {
        id: "ba025",
        questionText: "The associative law for OR operation is demonstrated by:",
        options: [
            "\\( A + B = B + A \\)",
            "\\( (A + B) + C = A + (B + C) \\)",
            "\\( A + (B \\cdot C) = (A + B) \\cdot (A + C) \\)",
            "\\( A + 0 = A \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "The associative law states that grouping of operands doesn't affect the result: \\( (A + B) + C = A + (B + C) \\)",
    },
    {
        id: "ba026",
        questionText: "What is \\( \\overline{A + B + C} \\) using De Morgan's law?",
        options: [
            "\\( \\overline{A} + \\overline{B} + \\overline{C} \\)",
            "\\( \\overline{A} \\cdot \\overline{B} \\cdot \\overline{C} \\)",
            "\\( A \\cdot B \\cdot C \\)",
            "\\( \\overline{A \\cdot B \\cdot C} \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "By De Morgan's law, the complement of a sum equals the product of complements: \\( \\overline{A + B + C} = \\overline{A} \\cdot \\overline{B} \\cdot \\overline{C} \\)",
    },
    {
        id: "ba027",
        questionText: "The distributive law \\( A \\cdot (B + C) \\) expands to:",
        options: [
            "\\( A \\cdot B + A \\cdot C \\)",
            "\\( (A \\cdot B) + C \\)",
            "\\( A + B \\cdot C \\)",
            "\\( A \\cdot B \\cdot C \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "The distributive law states: \\( A \\cdot (B + C) = A \\cdot B + A \\cdot C \\)",
    },
    {
        id: "ba028",
        questionText: "Which of the following demonstrates the complement law?",
        options: [
            "\\( A + \\overline{A} = 1 \\)",
            "\\( A \\cdot \\overline{A} = 0 \\)",
            "Both A and B",
            "Neither A nor B"
        ],
        correctAnswerIndex: 2,
        explanation: "The complement law has two parts: \\( A + \\overline{A} = 1 \\) and \\( A \\cdot \\overline{A} = 0 \\)",
    },
    {
        id: "ba029",
        questionText: "The expression \\( (A + B) \\cdot (\\overline{A} + B) \\) simplifies to:",
        options: [
            "\\( A \\)",
            "\\( B \\)",
            "\\( A + B \\)",
            "\\( A \\cdot B \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "Using distribution: \\( (A + B) \\cdot (\\overline{A} + B) = A \\cdot \\overline{A} + A \\cdot B + B \\cdot \\overline{A} + B \\cdot B = 0 + A \\cdot B + B \\cdot \\overline{A} + B = B(A + \\overline{A} + 1) = B \\)",
    },
    {
        id: "ba030",
        questionText: "What is the dual of \\( A \\cdot 1 + B \\cdot 0 \\)?",
        options: [
            "\\( (A + 0) \\cdot (B + 1) \\)",
            "\\( A + 1 \\cdot B + 0 \\)",
            "\\( \\overline{A} \\cdot \\overline{B} \\)",
            "\\( A + B \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "To find the dual, replace · with +, + with ·, 1 with 0, and 0 with 1: \\( (A + 0) \\cdot (B + 1) \\)",
    },
    {
        id: "ba031",
        questionText: "The expression \\( A \\cdot B \\cdot C + A \\cdot B \\cdot \\overline{C} \\) can be simplified to:",
        options: [
            "\\( A \\cdot B \\)",
            "\\( A \\cdot C \\)",
            "\\( B \\cdot C \\)",
            "\\( A + B \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "Factoring: \\( A \\cdot B \\cdot C + A \\cdot B \\cdot \\overline{C} = A \\cdot B \\cdot (C + \\overline{C}) = A \\cdot B \\cdot 1 = A \\cdot B \\)",
    },
    {
        id: "ba032",
        questionText: "Which law justifies \\( A \\cdot (B \\cdot C) = (A \\cdot B) \\cdot C \\)?",
        options: [
            "Commutative Law",
            "Associative Law",
            "Distributive Law",
            "Identity Law"
        ],
        correctAnswerIndex: 1,
        explanation: "The associative law for AND operation states that \\( A \\cdot (B \\cdot C) = (A \\cdot B) \\cdot C \\)",
    },
    {
        id: "ba033",
        questionText: "The expression \\( \\overline{A \\cdot B \\cdot C} \\) equals:",
        options: [
            "\\( \\overline{A} \\cdot \\overline{B} \\cdot \\overline{C} \\)",
            "\\( \\overline{A} + \\overline{B} + \\overline{C} \\)",
            "\\( A + B + C \\)",
            "\\( \\overline{A + B + C} \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "By De Morgan's law: \\( \\overline{A \\cdot B \\cdot C} = \\overline{A} + \\overline{B} + \\overline{C} \\)",
    },
    {
        id: "ba034",
        questionText: "What is the canonical POS form for the function F(A,B) = AB?",
        options: [
            "\\( (A + B) \\)",
            "\\( (\\overline{A} + B) \\cdot (A + \\overline{B}) \\)",
            "\\( (A + B) \\cdot (A + \\overline{B}) \\cdot (\\overline{A} + B) \\)",
            "\\( A \\cdot B \\)",
        ],
        correctAnswerIndex: 2,
        explanation: "For F = AB, the function is 0 when (A,B) = (0,0), (0,1), (1,0). The POS form uses maxterms for these combinations: \\( (A + B) \\cdot (A + \\overline{B}) \\cdot (\\overline{A} + B) \\)",
    },
    {
        id: "ba035",
        questionText: "The identity \\( A + A \\cdot \\overline{B} \\) simplifies to:",
        options: [
            "\\( A \\)",
            "\\( A + \\overline{B} \\)",
            "\\( A \\cdot \\overline{B} \\)",
            "\\( \\overline{B} \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "Using factoring and complement: \\( A + A \\cdot \\overline{B} = A(1 + \\overline{B}) = A \\cdot 1 = A \\). However, this can also be written as \\( A + \\overline{B} \\) by consensus theorem."
    },
    {
        id: "ba036",
        questionText: "If F = A'B + AB', what is F' using De Morgan's laws?",
        options: [
            "\\( (A + \\overline{B}) \\cdot (\\overline{A} + B) \\)",
            "\\( A \\cdot B + \\overline{A} \\cdot \\overline{B} \\)",
            "\\( \\overline{A} \\cdot B + A \\cdot \\overline{B} \\)",
            "\\( (A + B) \\cdot (\\overline{A} + \\overline{B}) \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "F = \\( \\overline{A} \\cdot B + A \\cdot \\overline{B} \\), so F' = \\( \\overline{\\overline{A} \\cdot B + A \\cdot \\overline{B}} = \\overline{\\overline{A} \\cdot B} \\cdot \\overline{A \\cdot \\overline{B}} = (A + \\overline{B}) \\cdot (\\overline{A} + B) \\)",
    },
    {
        id: "ba037",
        questionText: "The expression \\( (A + B) \\cdot (A + C) \\) can be simplified to:",
        options: [
            "\\( A + B \\cdot C \\)",
            "\\( A + B + C \\)",
            "\\( A \\cdot B + A \\cdot C \\)",
            "\\( (A + B) \\cdot (A + C) \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "Using the distributive law in reverse: \\( (A + B) \\cdot (A + C) = A + B \\cdot C \\)",
    },
    {
        id: "ba038",
        questionText: "What does the duality theorem state?",
        options: [
            "Every Boolean expression has a unique complement",
            "If an equality is valid, then its dual is also valid",
            "AND and OR operations are interchangeable",
            "Every function can be expressed in both SOP and POS forms"
        ],
        correctAnswerIndex: 1,
        explanation: "The duality theorem states that if a Boolean equality is valid, then the dual of that equality (obtained by interchanging + and ·, and 0 and 1) is also valid."
    },
    {
        id: "ba039",
        questionText: "The expression \\( A \\cdot B + \\overline{A} \\cdot B \\) simplifies to:",
        options: [
            "\\( A \\)",
            "\\( B \\)",
            "\\( A + B \\)",
            "\\( A \\cdot B \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "Factoring: \\( A \\cdot B + \\overline{A} \\cdot B = B \\cdot (A + \\overline{A}) = B \\cdot 1 = B \\)",
    },
    {
        id: "ba040",
        questionText: "Which of the following represents a minterm for variables A, B, C?",
        options: [
            "\\( A + B + C \\)",
            "\\( A \\cdot B \\cdot \\overline{C} \\)",
            "\\( A + \\overline{B} \\)",
            "\\( A \\cdot (B + C) \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "A minterm is a product term that includes all variables in either complemented or uncomplemented form. \\( A \\cdot B \\cdot \\overline{C} \\) is a minterm."
    },
    {
        id: "ba041",
        questionText: "Which of the following represents a maxterm for variables A, B, C?",
        options: [
            "\\( A \\cdot B \\cdot C \\)",
            "\\( A + B + \\overline{C} \\)",
            "\\( A \\cdot \\overline{B} \\)",
            "\\( (A + B) \\cdot C \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "A maxterm is a sum term that includes all variables in either complemented or uncomplemented form. \\( A + B + \\overline{C} \\) is a maxterm."
    },
    {
        id: "ba042",
        questionText: "The expression \\( A \\cdot \\overline{A} + B \\) simplifies to:",
        options: [
            "\\( A \\)",
            "\\( B \\)",
            "\\( A + B \\)",
            "\\( 0 \\)",
        ],
        correctAnswerIndex: 1,
        explanation: "Since \\( A \\cdot \\overline{A} = 0 \\), the expression becomes \\( 0 + B = B \\)",
    },
    {
        id: "ba043",
        questionText: "What is the complement of \\( A \\oplus B \\) (XOR)?",
        options: [
            "\\( A \\odot B \\) (XNOR)",
            "\\( \\overline{A} \\oplus \\overline{B} \\)",
            "\\( A \\oplus \\overline{B} \\)",
            "All of the above"
        ],
        correctAnswerIndex: 3,
        explanation: "The complement of XOR is XNOR. Also, \\( \\overline{A \\oplus B} = \\overline{A} \\oplus \\overline{B} = A \\oplus \\overline{B} = \\overline{A} \\oplus B = A \\odot B \\)",
    },
    {
        id: "ba044",
        questionText: "The expression \\( (A + B) \\cdot (\\overline{A} + \\overline{B}) \\) simplifies to:",
        options: [
            "\\( A \\oplus B \\)",
            "\\( A \\odot B \\)",
            "\\( A + B \\)",
            "\\( A \\cdot B \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "Expanding: \\( (A + B) \\cdot (\\overline{A} + \\overline{B}) = A\\overline{A} + A\\overline{B} + B\\overline{A} + B\\overline{B} = 0 + A\\overline{B} + B\\overline{A} + 0 = A\\overline{B} + \\overline{A}B = A \\oplus B \\)",
    },
    {
        id: "ba045",
        questionText: "Using Boolean algebra, \\( A + \\overline{A}B + \\overline{A}\\overline{B} \\) simplifies to:",
        options: [
            "\\( A + \\overline{A} \\)",
            "\\( A + \\overline{B} \\)",
            "\\( 1 \\)",
            "\\( A + B \\)",
        ],
        correctAnswerIndex: 2,
        explanation: "\\( A + \\overline{A}B + \\overline{A}\\overline{B} = A + \\overline{A}(B + \\overline{B}) = A + \\overline{A} \\cdot 1 = A + \\overline{A} = 1 \\)",
    },
    {
        id: "ba046",
        questionText: "The dual of \\( (A \\cdot B) + (C \\cdot 0) \\) is:",
        options: [
            "\\( (A + B) \\cdot (C + 1) \\)",
            "\\( (\\overline{A} + \\overline{B}) \\cdot (\\overline{C} + 1) \\)",
            "\\( A + B + C \\)",
            "\\( A \\cdot B \\cdot C \\)",
        ],
        correctAnswerIndex: 0,
        explanation: "To find the dual, replace + with ·, · with +, 0 with 1, and 1 with 0: \\( (A + B) \\cdot (C + 1) \\)",
    },
    {
        id: "ba047",
        questionText: "The expression \\( AB + A\\overline{C} + BC \\) represents which form?",
        options: [
            "Sum of Products (SOP)",
            "Product of Sums (POS)",
            "Canonical SOP",
            "Canonical POS"
        ],
        correctAnswerIndex: 0,
        explanation: "This expression consists of product terms (AB, A\\overline{C}, BC) connected by OR operations, making it a Sum of Products (SOP) form."
    },
    {
        id: "ba048",
        questionText: "What is \\( \\overline{\\overline{A} + \\overline{B}} \\) simplified?",
        options: [
            "\\( A + B \\)",
            "\\( A \\cdot B \\)",
            "\\( \\overline{A} \\cdot \\overline{B} \\)",
            "\\( \\overline{A} + \\overline{B} \\)"
        ],
        correctAnswerIndex: 1,
        explanation: "Using De Morgan's law: \\( \\overline{\\overline{A} + \\overline{B}} = \\overline{\\overline{A}} \\cdot \\overline{\\overline{B}} = A \\cdot B \\)",
    },
    {
        id: "ba049",
        questionText: "The consensus theorem eliminates redundant terms. In \\( AB + \\overline{A}C + BC \\), which term is redundant?",
        options: [
            "\\( AB \\)",
            "\\( \\overline{A}C \\)",
            "\\( BC \\)",
            "None are redundant"
        ],
        correctAnswerIndex: 2,
        explanation: "By the consensus theorem, \\( BC \\) is redundant because \\( AB + \\overline{A}C + BC = AB + \\overline{A}C \\). The term \\( BC \\) is the consensus of \\( AB \\) and \\( \\overline{A}C \\)."
    },
    {
        id: "ba050",
        questionText: "The expression \\( (A + B)(\\overline{A} + C)(B + C) \\) can be simplified using consensus to:",
        options: [
            "\\( (A + B)(\\overline{A} + C) \\)",
            "\\( (A + B)(B + C) \\)",
            "\\( (\\overline{A} + C)(B + C) \\)",
            "Cannot be simplified"
        ],
        correctAnswerIndex: 0,
        explanation: "By the dual of consensus theorem for POS form, the term \\( (B + C) \\) is redundant and can be eliminated: \\( (A + B)(\\overline{A} + C)(B + C) = (A + B)(\\overline{A} + C) \\)",
    }
]