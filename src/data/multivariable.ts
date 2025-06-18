export const ma1040 = [
    {
        id: "ma001",
        questionText: "The domain of the function $f(x, y) = \\sqrt{9 - x^2 - y^2}$ is:",
        options: [
            "$\\{(x, y) : x^2 + y^2 < 9\\}$",
            "$\\{(x, y) : x^2 + y^2 > 9\\}$",
            "$\\{(x, y) : x^2 + y^2 \\geq 9\\}$",
            "$\\{(x, y) : x^2 + y^2 \\leq 9\\}$"
        ],
        correctAnswerIndex: 3,
        explanation: "For the function to be defined, we need $9 - x^2 - y^2 \\geq 0$, which gives $x^2 + y^2 \\leq 9$. This is a closed disk of radius 3 centered at origin."
    },
    {
        id: "ma002",
        questionText: "Find $\\lim_{(x,y) \\to (0,0)} \\frac{xy}{x^2 + y^2}$:",
        options: [
            "0",
            "Does not exist",
            "1",
            "$\\frac{1}{2}$"
        ],
        correctAnswerIndex: 1,
        explanation: "Along $y = mx$, the limit becomes $\\frac{m}{1+m^2}$, which depends on $m$. Since different paths give different limits, the limit does not exist."
    },
    {
        id: "ma003",
        questionText: "If $f(x, y) = x^3y^2 + 2xy^3$, then $\\frac{\\partial f}{\\partial x}$ is:",
        options: [
            "$2x^3y + 6xy^2$",
            "$3x^2y^2 + 6xy^2$",
            "$x^3 + 2y^3$",
            "$3x^2y^2 + 2y^3$"
        ],
        correctAnswerIndex: 3,
        explanation: "Taking partial derivative with respect to $x$ while treating $y$ as constant: $\\frac{\\partial}{\\partial x}(x^3y^2 + 2xy^3) = 3x^2y^2 + 2y^3$"
    },
    {
        id: "ma004",
        questionText: "If $f(x, y) = x^2y + 3xy^2$, then $\\frac{\\partial^2 f}{\\partial x \\partial y}$ is:",
        options: [
            "$2xy + 6xy$",
            "$2x + 6y$",
            "$2x + 3y$",
            "$x^2 + 3x$"
        ],
        correctAnswerIndex: 1,
        explanation: "First find $\\frac{\\partial f}{\\partial x} = 2xy + 3y^2$, then $\\frac{\\partial^2 f}{\\partial y \\partial x} = 2x + 6y$"
    },
    {
        id: "ma005",
        questionText: "The gradient of $f(x, y) = x^2 + y^2$ at point $(1, 2)$ is:",
        options: [
            "$\\mathbf{i} + 2\\mathbf{j}$",
            "$2\\mathbf{i} + 2\\mathbf{j}$",
            "$2\\mathbf{i} + 4\\mathbf{j}$",
            "$4\\mathbf{i} + 4\\mathbf{j}$"
        ],
        correctAnswerIndex: 2,
        explanation: "$\\nabla f = \\frac{\\partial f}{\\partial x}\\mathbf{i} + \\frac{\\partial f}{\\partial y}\\mathbf{j} = 2x\\mathbf{i} + 2y\\mathbf{j}$. At $(1,2)$: $\\nabla f(1,2) = 2\\mathbf{i} + 4\\mathbf{j}$"
    },
    {
        id: "ma006",
        questionText: "The directional derivative of $f(x, y) = x^2y$ at point $(1, 2)$ in the direction of vector $\\mathbf{v} = \\mathbf{i} + \\mathbf{j}$ is:",
        options: [
            "$6$",
            "$\\frac{6}{\\sqrt{2}}$",
            "$\\frac{5\\sqrt{2}}{2}$",
            "$\\frac{3}{\\sqrt{2}}$"
        ],
        correctAnswerIndex: 2,
        explanation: "$\\nabla f = 2xy\\mathbf{i} + x^2\\mathbf{j}$. At $(1,2)$: $\\nabla f = 4\\mathbf{i} + \\mathbf{j}$. Unit vector: $\\mathbf{u} = \\frac{\\mathbf{i} + \\mathbf{j}}{\\sqrt{2}}$. Directional derivative: $\\nabla f \\cdot \\mathbf{u} = \\frac{4 + 1}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$"
    },
    {
        id: "ma007",
        questionText: "Find the equation of the tangent plane to $z = x^2 + y^2$ at point $(1, 1, 2)$:",
        options: [
            "$z = x + y$",
            "$z = 2x + 2y$",
            "$z = x + y + 1$",
            "$z = 2x + 2y - 2$"
        ],
        correctAnswerIndex: 3,
        explanation: "$f_x = 2x$, $f_y = 2y$. At $(1,1)$: $f_x(1,1) = 2$, $f_y(1,1) = 2$. Tangent plane: $z - 2 = 2(x-1) + 2(y-1) = 2x + 2y - 4$, so $z = 2x + 2y - 2$"
    },
    {
        id: "ma008",
        questionText: "If $z$ is defined implicitly by $x^2 + y^2 + z^2 = 9$, then $\\frac{\\partial z}{\\partial x}$ is:",
        options: [
            "$\\frac{x}{z}$",
            "$-\\frac{z}{x}$",
            "$\\frac{2x}{2z}$",
            "$-\\frac{x}{z}$"
        ],
        correctAnswerIndex: 3,
        explanation: "Differentiating implicitly: $2x + 2z\\frac{\\partial z}{\\partial x} = 0$, so $\\frac{\\partial z}{\\partial x} = -\\frac{x}{z}$"
    },
    {
        id: "ma009",
        questionText: "Using the chain rule, if $w = x^2 + y^2$ where $x = t^2$ and $y = t^3$, then $\\frac{dw}{dt}$ is:",
        options: [
            "$2t + 3t^2$",
            "$4t + 6t^2$",
            "$4t^3 + 6t^5$",
            "$2t^2 + 2t^3$"
        ],
        correctAnswerIndex: 2,
        explanation: "$\\frac{dw}{dt} = \\frac{\\partial w}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial w}{\\partial y}\\frac{dy}{dt} = 2x(2t) + 2y(3t^2) = 2t^2(2t) + 2t^3(3t^2) = 4t^3 + 6t^5$"
    },
    {
        id: "ma010",
        questionText: "The critical points of $f(x, y) = x^2 + y^2 - 2x - 4y + 5$ are:",
        options: [
            "$(2, 4)$",
            "$(0, 0)$",
            "$(1, 1)$",
            "$(1, 2)$"
        ],
        correctAnswerIndex: 3,
        explanation: "$f_x = 2x - 2 = 0 \\Rightarrow x = 1$. $f_y = 2y - 4 = 0 \\Rightarrow y = 2$. Critical point is $(1, 2)$"
    },
    {
        id: "ma011",
        questionText: "For the function $f(x, y) = x^2 + y^2$, the nature of critical point $(0, 0)$ is:",
        options: [
            "Local maximum",
            "Saddle point",
            "Inconclusive",
            "Local minimum"
        ],
        correctAnswerIndex: 3,
        explanation: "$f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$. $D = f_{xx}f_{yy} - (f_{xy})^2 = 4 > 0$ and $f_{xx} = 2 > 0$, so $(0,0)$ is a local minimum"
    },
    {
        id: "ma012",
        questionText: "Evaluate $\\int_0^1 \\int_0^2 xy \\, dx \\, dy$:",
        options: [
            "$2$",
            "$1$",
            "$4$",
            "$\\frac{1}{2}$"
        ],
        correctAnswerIndex: 1,
        explanation: "$\\int_0^1 \\int_0^2 xy \\, dx \\, dy = \\int_0^1 y \\left[\\frac{x^2}{2}\\right]_0^2 dy = \\int_0^1 y \\cdot 2 \\, dy = 2\\left[\\frac{y^2}{2}\\right]_0^1 = 1$"
    },
    {
        id: "ma013",
        questionText: "The area of the region bounded by $x = 0$, $x = 1$, $y = 0$, and $y = x$ is:",
        options: [
            "$1$",
            "$\\frac{1}{4}$",
            "$2$",
            "$\\frac{1}{2}$"
        ],
        correctAnswerIndex: 3,
        explanation: "Area = $\\int_0^1 \\int_0^x dy \\, dx = \\int_0^1 x \\, dx = \\left[\\frac{x^2}{2}\\right]_0^1 = \\frac{1}{2}$"
    },
    {
        id: "ma014",
        questionText: "Change the order of integration in $\\int_0^1 \\int_0^{\\sqrt{1-x^2}} f(x,y) \\, dy \\, dx$:",
        options: [
            "$\\int_0^1 \\int_y^1 f(x,y) \\, dx \\, dy$",
            "$\\int_0^1 \\int_0^y f(x,y) \\, dx \\, dy$",
            "$\\int_0^1 \\int_{y^2}^1 f(x,y) \\, dx \\, dy$",
            "$\\int_0^1 \\int_0^{\\sqrt{1-y^2}} f(x,y) \\, dx \\, dy$"
        ],
        correctAnswerIndex: 3,
        explanation: "The region is a quarter circle $x^2 + y^2 \\leq 1$ in the first quadrant. Changing order: $x$ ranges from $0$ to $\\sqrt{1-y^2}$ for each $y$ from $0$ to $1$"
    },
    {
        id: "ma015",
        questionText: "Using polar coordinates, $\\int \\int_R (x^2 + y^2) \\, dA$ over the unit disk becomes:",
        options: [
            "$\\int_0^{2\\pi} \\int_0^1 r^2 \\, dr \\, d\\theta$",
            "$\\int_0^{2\\pi} \\int_0^1 r \\, dr \\, d\\theta$",
            "$\\int_0^{\\pi} \\int_0^1 r^3 \\, dr \\, d\\theta$",
            "$\\int_0^{2\\pi} \\int_0^1 r^3 \\, dr \\, d\\theta$"
        ],
        correctAnswerIndex: 3,
        explanation: "In polar coordinates: $x^2 + y^2 = r^2$ and $dA = r \\, dr \\, d\\theta$. So the integral becomes $\\int_0^{2\\pi} \\int_0^1 r^2 \\cdot r \\, dr \\, d\\theta = \\int_0^{2\\pi} \\int_0^1 r^3 \\, dr \\, d\\theta$"
    },
    {
        id: "ma016",
        questionText: "The Jacobian of the transformation $x = u + v$, $y = u - v$ is:",
        options: [
            "$2$",
            "$1$",
            "$0$",
            "$-2$"
        ],
        correctAnswerIndex: 3,
        explanation: "Jacobian = $\\begin{vmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{vmatrix} = \\begin{vmatrix} 1 & 1 \\\\ 1 & -1 \\end{vmatrix} = -1 - 1 = -2$"
    },
    {
        id: "ma017",
        questionText: "The triple integral $\\int_0^1 \\int_0^1 \\int_0^1 xyz \\, dx \\, dy \\, dz$ equals:",
        options: [
            "$\\frac{1}{4}$",
            "$\\frac{1}{2}$",
            "$1$",
            "$\\frac{1}{8}$"
        ],
        correctAnswerIndex: 3,
        explanation: "$\\int_0^1 \\int_0^1 \\int_0^1 xyz \\, dx \\, dy \\, dz = \\int_0^1 x \\, dx \\cdot \\int_0^1 y \\, dy \\cdot \\int_0^1 z \\, dz = \\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{8}$"
    },
    {
        id: "ma018",
        questionText: "The volume of the solid bounded by $z = 0$, $z = 4 - x^2 - y^2$ is:",
        options: [
            "$4\\pi$",
            "$16\\pi$",
            "$2\\pi$",
            "$8\\pi$"
        ],
        correctAnswerIndex: 3,
        explanation: "In cylindrical coordinates: $V = \\int_0^{2\\pi} \\int_0^2 \\int_0^{4-r^2} r \\, dz \\, dr \\, d\\theta = \\int_0^{2\\pi} \\int_0^2 r(4-r^2) \\, dr \\, d\\theta = 2\\pi \\int_0^2 (4r - r^3) \\, dr = 2\\pi[2r^2 - \\frac{r^4}{4}]_0^2 = 2\\pi(8-4) = 8\\pi$"
    },
    {
        id: "ma019",
        questionText: "Using spherical coordinates, the volume element $dV$ is:",
        options: [
            "$\\rho \\, d\\rho \\, d\\phi \\, d\\theta$",
            "$\\rho^2 \\, d\\rho \\, d\\phi \\, d\\theta$",
            "$\\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$",
            "$\\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$"
        ],
        correctAnswerIndex: 3,
        explanation: "In spherical coordinates $(\\rho, \\phi, \\theta)$, the volume element is $dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$"
    },
    {
        id: "ma020",
        questionText: "The differential equation $\\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y} = z$ is:",
        options: [
            "Second order linear PDE",
            "First order non-linear PDE",
            "Second order non-linear PDE",
            "First order linear PDE"
        ],
        correctAnswerIndex: 3,
        explanation: "The equation involves only first-order partial derivatives and is linear in $z$ and its derivatives, making it a first-order linear PDE"
    },
    {
        id: "ma021",
        questionText: "The PDE $\\frac{\\partial^2 z}{\\partial x^2} + \\frac{\\partial^2 z}{\\partial y^2} = 0$ is known as:",
        options: [
            "Wave equation",
            "Heat equation",
            "Poisson equation",
            "Laplace equation"
        ],
        correctAnswerIndex: 3,
        explanation: "The equation $\\frac{\\partial^2 z}{\\partial x^2} + \\frac{\\partial^2 z}{\\partial y^2} = 0$ is the two-dimensional Laplace equation"
    },
    {
        id: "ma022",
        questionText: "For the PDE $\\frac{\\partial z}{\\partial x} + 2\\frac{\\partial z}{\\partial y} = 3z$, the characteristic equations are:",
        options: [
            "$\\frac{dx}{2} = \\frac{dy}{1} = \\frac{dz}{3z}$",
            "$\\frac{dx}{3} = \\frac{dy}{2} = \\frac{dz}{z}$",
            "$\\frac{dx}{1} = \\frac{dy}{2} = \\frac{dz}{z}$",
            "$\\frac{dx}{1} = \\frac{dy}{2} = \\frac{dz}{3z}$"
        ],
        correctAnswerIndex: 3,
        explanation: "For the PDE $P\\frac{\\partial z}{\\partial x} + Q\\frac{\\partial z}{\\partial y} = R$, the characteristic equations are $\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$. Here $P=1$, $Q=2$, $R=3z$"
    },
    {
        id: "ma023",
        questionText: "The method of characteristics is used to solve:",
        options: [
            "Second order PDEs",
            "Only linear PDEs",
            "Only elliptic PDEs",
            "First order PDEs"
        ],
        correctAnswerIndex: 3,
        explanation: "The method of characteristics is primarily used for solving first-order partial differential equations"
    },
    {
        id: "ma024",
        questionText: "The solution of the PDE $\\frac{\\partial z}{\\partial x} = 0$ is:",
        options: [
            "$z = f(x)$",
            "$z = xy + c$",
            "$z = x + y$",
            "$z = f(y)$"
        ],
        correctAnswerIndex: 3,
        explanation: "If $\\frac{\\partial z}{\\partial x} = 0$, then $z$ does not depend on $x$, so $z = f(y)$ for some function $f$"
    },
    {
        id: "ma025",
        questionText: "For a function $f(x,y)$ to be continuous at $(a,b)$, we need:",
        options: [
            "$\\lim_{(x,y) \\to (a,b)} f(x,y)$ exists",
            "$f(a,b)$ is defined",
            "All partial derivatives exist at $(a,b)$",
            "$\\lim_{(x,y) \\to (a,b)} f(x,y) = f(a,b)$"
        ],
        correctAnswerIndex: 3,
        explanation: "Continuity requires that the limit as $(x,y)$ approaches $(a,b)$ equals the function value at $(a,b)$"
    },
    {
        id: "ma026",
        questionText: "The range of the function $f(x, y) = x^2 + y^2$ is:",
        options: [
            "$[0, \\infty)$",
            "$(-\\infty, \\infty)$",
            "$(-\\infty, 0]$",
            "$[1, \\infty)$"
        ],
        correctAnswerIndex: 0,
        explanation: "Since $x^2 \\geq 0$ and $y^2 \\geq 0$ for all real $x, y$, we have $f(x,y) = x^2 + y^2 \\geq 0$. The range is $[0, \\infty)$"
    },
    {
        id: "ma027",
        questionText: "If $f(x, y) = \\ln(x + y)$, then the domain is:",
        options: [
            "$\\{(x, y) : x + y > 0\\}$",
            "$\\{(x, y) : x > 0, y > 0\\}$",
            "$\\{(x, y) : x + y \\geq 0\\}$",
            "$\\{(x, y) : x \\geq 0, y \\geq 0\\}$"
        ],
        correctAnswerIndex: 0,
        explanation: "For $\\ln(x + y)$ to be defined, we need $x + y > 0$"
    },
    {
        id: "ma028",
        questionText: "The limit $\\lim_{(x,y) \\to (0,0)} \\frac{x^2y}{x^2 + y^2}$ is:",
        options: [
            "1",
            "$\\frac{1}{2}$",
            "Does not exist",
            "0"
        ],
        correctAnswerIndex: 3,
        explanation: "Using polar coordinates: $\\frac{r^2\\cos^2\\theta \\cdot r\\sin\\theta}{r^2} = r\\cos^2\\theta\\sin\\theta \\to 0$ as $r \\to 0$"
    },
    {
        id: "ma029",
        questionText: "If $f(x, y) = e^{xy}$, then $f_{xy}$ is:",
        options: [
            "$ye^{xy}$",
            "$xye^{xy}$",
            "$(1 + xy)e^{xy}$",
            "$e^{xy}$"
        ],
        correctAnswerIndex: 2,
        explanation: "$f_x = ye^{xy}$, then $f_{xy} = \\frac{\\partial}{\\partial y}(ye^{xy}) = e^{xy} + y \\cdot xe^{xy} = e^{xy}(1 + xy)$"
    },
    {
        id: "ma030",
        questionText: "The maximum directional derivative of $f(x, y) = x^2 + 2y^2$ at point $(1, 1)$ is:",
        options: [
            "$2\\sqrt{5}$",
            "$\\sqrt{8}$",
            "$4$",
            "$2$"
        ],
        correctAnswerIndex: 0,
        explanation: "$\\nabla f = 2x\\mathbf{i} + 4y\\mathbf{j}$. At $(1,1)$: $\\nabla f(1,1) = 2\\mathbf{i} + 4\\mathbf{j}$. Maximum directional derivative is $|\\nabla f| = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$"
    },
    {
        id: "ma031",
        questionText: "The level curve $f(x, y) = x^2 + y^2 = 4$ represents:",
        options: [
            "A parabola",
            "An ellipse",
            "A hyperbola",
            "A circle"
        ],
        correctAnswerIndex: 3,
        explanation: "The equation $x^2 + y^2 = 4$ represents a circle with center at origin and radius 2"
    },
    {
        id: "ma032",
        questionText: "If $z = f(x, y)$ where $x = r\\cos\\theta$ and $y = r\\sin\\theta$, then $\\frac{\\partial z}{\\partial r}$ is:",
        options: [
            "$f_x \\cos\\theta + f_y \\sin\\theta$",
            "$f_x \\sin\\theta + f_y \\cos\\theta$",
            "$f_x \\cos\\theta - f_y \\sin\\theta$",
            "$f_x r\\cos\\theta + f_y r\\sin\\theta$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using chain rule: $\\frac{\\partial z}{\\partial r} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial r} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial r} = f_x \\cos\\theta + f_y \\sin\\theta$"
    },
    {
        id: "ma033",
        questionText: "The function $f(x, y) = |xy|$ is:",
        options: [
            "Differentiable everywhere",
            "Continuous everywhere but not differentiable at $(0, 0)$",
            "Not continuous at $(0, 0)$",
            "Differentiable at $(0, 0)$ only"
        ],
        correctAnswerIndex: 1,
        explanation: "The function is continuous everywhere, but the partial derivatives don't exist at $(0,0)$ due to the absolute value"
    },
    {
        id: "ma034",
        questionText: "Using Lagrange multipliers to maximize $f(x, y) = xy$ subject to $x^2 + y^2 = 1$, the maximum value is:",
        options: [
            "$\\frac{1}{2}$",
            "$1$",
            "$\\frac{1}{4}$",
            "$\\frac{\\sqrt{2}}{2}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Setting up: $\\nabla f = \\lambda \\nabla g$ gives $y = 2\\lambda x$ and $x = 2\\lambda y$. With $x^2 + y^2 = 1$, we get $x = y = \\pm\\frac{1}{\\sqrt{2}}$. Maximum value is $\\frac{1}{2}$"
    },
    {
        id: "ma035",
        questionText: "For the function $f(x, y) = x^2 - y^2$, the critical point $(0, 0)$ is:",
        options: [
            "Local minimum",
            "Local maximum",
            "Saddle point",
            "Inconclusive"
        ],
        correctAnswerIndex: 2,
        explanation: "$f_{xx} = 2$, $f_{yy} = -2$, $f_{xy} = 0$. $D = f_{xx}f_{yy} - (f_{xy})^2 = -4 < 0$, so $(0,0)$ is a saddle point"
    },
    {
        id: "ma036",
        questionText: "The area of the region $D = \\{(x, y) : 0 \\leq x \\leq 1, x^2 \\leq y \\leq x\\}$ is:",
        options: [
            "$\\frac{1}{6}$",
            "$\\frac{1}{3}$",
            "$\\frac{1}{2}$",
            "$\\frac{1}{4}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Area = $\\int_0^1 \\int_{x^2}^x dy \\, dx = \\int_0^1 (x - x^2) \\, dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$"
    },
    {
        id: "ma037",
        questionText: "The double integral $\\int_0^1 \\int_0^{1-x} (x + y) \\, dy \\, dx$ equals:",
        options: [
            "$\\frac{1}{2}$",
            "$\\frac{1}{3}$",
            "$\\frac{2}{3}$",
            "$1$"
        ],
        correctAnswerIndex: 1,
        explanation: "$\\int_0^1 \\int_0^{1-x} (x + y) \\, dy \\, dx = \\int_0^1 \\left[xy + \\frac{y^2}{2}\\right]_0^{1-x} dx = \\int_0^1 \\left(x(1-x) + \\frac{(1-x)^2}{2}\\right) dx = \\frac{1}{3}$"
    },
    {
        id: "ma038",
        questionText: "The value of $\\int_0^{2\\pi} \\int_0^1 r^2 \\, dr \\, d\\theta$ is:",
        options: [
            "$\\frac{2\\pi}{3}$",
            "$\\pi$",
            "$2\\pi$",
            "$\\frac{\\pi}{3}$"
        ],
        correctAnswerIndex: 0,
        explanation: "$\\int_0^{2\\pi} \\int_0^1 r^2 \\, dr \\, d\\theta = \\int_0^{2\\pi} \\left[\\frac{r^3}{3}\\right]_0^1 d\\theta = \\int_0^{2\\pi} \\frac{1}{3} \\, d\\theta = \\frac{2\\pi}{3}$"
    },
    {
        id: "ma039",
        questionText: "The Jacobian of the transformation $x = u^2 - v^2$, $y = 2uv$ is:",
        options: [
            "$4(u^2 + v^2)$",
            "$4(u^2 - v^2)$",
            "$2(u^2 + v^2)$",
            "$2uv$"
        ],
        correctAnswerIndex: 0,
        explanation: "Jacobian = $\\begin{vmatrix} 2u & -2v \\\\ 2v & 2u \\end{vmatrix} = 4u^2 + 4v^2 = 4(u^2 + v^2)$"
    },
    {
        id: "ma040",
        questionText: "For a differentiable function $f(x,y)$, the mixed partial derivatives $f_{xy}$ and $f_{yx}$ are equal when:",
        options: [
            "Always",
            "Both are continuous",
            "The function is differentiable",
            "Never"
        ],
        correctAnswerIndex: 1,
        explanation: "By Clairaut's theorem (Schwarz's theorem), mixed partial derivatives are equal when both are continuous"
    },
    {
        id: "ma041",
        questionText: "The linearization of $f(x, y) = e^{x+y}$ at $(0, 0)$ is:",
        options: [
            "$1$",
            "$x + y$",
            "$1 + x + y$",
            "$e^x + e^y$"
        ],
        correctAnswerIndex: 2,
        explanation: "$f(0,0) = 1$, $f_x(0,0) = 1$, $f_y(0,0) = 1$. Linearization: $L(x,y) = 1 + 1(x-0) + 1(y-0) = 1 + x + y$"
    },
    {
        id: "ma042",
        questionText: "The constraint $g(x, y) = x^2 + y^2 - 1 = 0$ represents:",
        options: [
            "A parabola",
            "A hyperbola",
            "An ellipse",
            "A circle"
        ],
        correctAnswerIndex: 3,
        explanation: "The equation $x^2 + y^2 = 1$ represents a unit circle"
    },
    {
        id: "ma043",
        questionText: "The region of integration for $\\int_0^1 \\int_0^{\\sqrt{1-y^2}} f(x,y) \\, dx \\, dy$ is:",
        options: [
            "A semicircle",
            "A quarter circle",
            "A full circle",
            "A triangle"
        ],
        correctAnswerIndex: 1,
        explanation: "The limits describe the region where $0 \\leq y \\leq 1$ and $0 \\leq x \\leq \\sqrt{1-y^2}$, which is a quarter circle in the first quadrant"
    },
    {
        id: "ma044",
        questionText: "In cylindrical coordinates, the equation $x^2 + y^2 = 4$ becomes:",
        options: [
            "$r = 4$",
            "$r = 2$",
            "$r^2 = 4$",
            "$\\rho = 2$"
        ],
        correctAnswerIndex: 1,
        explanation: "In cylindrical coordinates, $x^2 + y^2 = r^2$, so $r^2 = 4$ gives $r = 2$"
    },
    {
        id: "ma045",
        questionText: "The equation of the normal line to the surface $z = x^2 + y^2$ at point $(1, 1, 2)$ is:",
        options: [
            "$\\frac{x-1}{2} = \\frac{y-1}{2} = \\frac{z-2}{-1}$",
            "$\\frac{x-1}{1} = \\frac{y-1}{1} = \\frac{z-2}{1}$",
            "$\\frac{x-1}{-2} = \\frac{y-1}{-2} = \\frac{z-2}{1}$",
            "$\\frac{x-1}{2} = \\frac{y-1}{2} = \\frac{z-2}{1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The normal vector is $\\nabla(z - x^2 - y^2) = -2x\\mathbf{i} - 2y\\mathbf{j} + \\mathbf{k}$. At $(1,1,2)$: $\\mathbf{n} = -2\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$ or $2\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$"
    },
    {
        id: "ma046",
        questionText: "The PDE $\\frac{\\partial z}{\\partial x} + 2\\frac{\\partial z}{\\partial y} = 0$ has the general solution:",
        options: [
            "$z = f(2x - y)$",
            "$z = f(x + 2y)$",
            "$z = f(x - 2y)$",
            "$z = f(2x + y)$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equations give $\\frac{dx}{1} = \\frac{dy}{2}$, so $2x - y = $ constant. Therefore $z = f(2x - y)$"
    },
    {
        id: "ma047",
        questionText: "The order of the PDE $\\frac{\\partial^3 z}{\\partial x^3} + \\frac{\\partial^2 z}{\\partial x \\partial y} = z$ is:",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correctAnswerIndex: 2,
        explanation: "The order is determined by the highest partial derivative, which is 3 in this case"
    },
    {
        id: "ma048",
        questionText: "The degree of the PDE $(\\frac{\\partial z}{\\partial x})^2 + \\frac{\\partial z}{\\partial y} = z$ is:",
        options: [
            "1",
            "2",
            "3",
            "Cannot be determined"
        ],
        correctAnswerIndex: 1,
        explanation: "The degree is the highest power of the highest order derivative term, which is 2 for $(\\frac{\\partial z}{\\partial x})^2$"
    },
    {
        id: "ma049",
        questionText: "For the function $f(x, y) = x^4 + y^4 - 4xy$, the point $(1, 1)$ is:",
        options: [
            "Local minimum",
            "Local maximum",
            "Saddle point",
            "Not a critical point"
        ],
        correctAnswerIndex: 0,
        explanation: "$f_x = 4x^3 - 4y = 0$ and $f_y = 4y^3 - 4x = 0$ at $(1,1)$. Second derivative test: $f_{xx}(1,1) = 12$, $f_{yy}(1,1) = 12$, $f_{xy}(1,1) = -4$. $D = 144 - 16 = 128 > 0$ and $f_{xx} > 0$, so it's a local minimum"
    },
    {
        id: "ma050",
        questionText: "A first order PDE of the form $P(x,y,z)p + Q(x,y,z)q = R(x,y,z)$ is called:",
        options: [
            "Linear PDE",
            "Semi-linear PDE", 
            "Quasi-linear PDE",
            "Non-linear PDE"
        ],
        correctAnswerIndex: 2,
        explanation: "A PDE that is linear in the partial derivatives with coefficients depending on x, y, and z is called quasi-linear"
    },
    {
        id: "ma051",
        questionText: "If $f(x, y) \\geq 0$ on $D$, then $\\iint_D f(x, y)dA$ is:",
        options: [
            "$\\geq 0$",
            "$\\leq 0$", 
            "$\\phi$",
            "None of these"
        ],
        correctAnswerIndex: 0,
        explanation: "If the integrand is non-negative over the region, then the double integral must also be non-negative."
    },
    {
        id: "ma052",
        questionText: "If $f(x, y) \\geq g(x, y)$ on $D$, then $\\iint_D f(x, y)dA$ is:",
        options: [
            "$\\leq \\iint_D g(x, y)dA$",
            "$\\geq \\iint_D g(x, y)dA$",
            "$0$",
            "None of these"
        ],
        correctAnswerIndex: 1,
        explanation: "If $f \\geq g$ pointwise on $D$, then the integral of $f$ is greater than or equal to the integral of $g$."
    },
    {
        id: "ma053", 
        questionText: "Evaluate $\\int_1^2 \\int_0^1 3x^2y \\, dx \\, dy$:",
        options: [
            "$1$",
            "$0$",
            "$-\\frac{3}{2}$",
            "$\\frac{3}{2}$"
        ],
        correctAnswerIndex: 3,
        explanation: "$\\int_1^2 \\int_0^1 3x^2y \\, dx \\, dy = \\int_1^2 y[x^3]_0^1 dy = \\int_1^2 y \\, dy = [\\frac{y^2}{2}]_1^2 = 2 - \\frac{1}{2} = \\frac{3}{2}$"
    },
    {
        id: "ma054",
        questionText: "If $f(x, y)$ approaches two different numbers as $(x, y)$ approaches $(a, b)$ along two different paths, then $\\lim_{(x,y) \\to (a,b)} f(x, y)$:",
        options: [
            "does not exist",
            "equal to zero",
            "exists",
            "none of these"
        ],
        correctAnswerIndex: 0,
        explanation: "If different paths yield different limit values, then the limit does not exist."
    },
    {
        id: "ma055",
        questionText: "Evaluate $\\lim_{(x,y) \\to (1,2)} (x^3y^2 - x^2y + x^2 - 2x + 3y)$:",
        options: [
            "$0$",
            "$1$",
            "$7$",
            "$-7$"
        ],
        correctAnswerIndex: 2,
        explanation: "Direct substitution: $(1)^3(2)^2 - (1)^2(2) + (1)^2 - 2(1) + 3(2) = 4 - 2 + 1 - 2 + 6 = 7$"
    },
    {
        id: "ma056",
        questionText: "Find $\\lim_{(x,y) \\to (0,0)} \\frac{2x^2y}{x^2 + y^2}$:",
        options: [
            "$1$",
            "$4$",
            "$3$",
            "$0$"
        ],
        correctAnswerIndex: 3,
        explanation: "Using polar coordinates: $\\frac{2r^2\\cos^2\\theta \\sin\\theta}{r^2} = 2\\cos^2\\theta\\sin\\theta$. As $r \\to 0$, this approaches $0$."
    },
    {
        id: "ma057",
        questionText: "Let $f$ be a function that is defined for all points $(x, y)$ close to the point $(a, b)$. Then $f$ is continuous at the point $(a, b)$ if:",
        options: [
            "$\\lim_{(x,y) \\to (a,b)} f(x, y) = f(a, b)$",
            "$\\lim_{(x,y) \\to (a,b)} f(x, y)$ exists",
            "$\\lim_{(x,y) \\to (a,b)} f(x, y)$ does not exist",
            "$\\lim_{(x,y) \\to (a,b)} f(x, y) = f(0, 0)$"
        ],
        correctAnswerIndex: 0,
        explanation: "Continuity at $(a,b)$ requires that the limit equals the function value at that point."
    },
    {
        id: "ma058",
        questionText: "A region $R$ is said to be an open region if every point of $R$ is:",
        options: [
            "cluster point",
            "interior point of $R$",
            "closure of $R$",
            "none of these"
        ],
        correctAnswerIndex: 1,
        explanation: "An open region consists entirely of interior points - points that have a neighborhood contained within the region."
    },
    {
        id: "ma059",
        questionText: "A region is closed if it contains all of its:",
        options: [
            "interior points",
            "cluster points",
            "center points",
            "boundary points"
        ],
        correctAnswerIndex: 3,
        explanation: "A closed region contains all its boundary points."
    },
    {
        id: "ma060",
        questionText: "Find $\\frac{\\partial f}{\\partial x}$ if $f(x, y) = 2x^2y^3 - 3xy^2 + 2x^2 + 3y^2 + 1$:",
        options: [
            "$4xy^3 - 3y^2 + 4x$",
            "$4x^2y^3$",
            "$6x^2y^3 - 6xy^2 + 4x^2 + 3y^2$",
            "$6x^2y^3 - 6xy^2 + 2x^2 + 3y^2$"
        ],
        correctAnswerIndex: 0,
        explanation: "Taking partial derivative with respect to $x$: $\\frac{\\partial}{\\partial x}(2x^2y^3 - 3xy^2 + 2x^2 + 3y^2 + 1) = 4xy^3 - 3y^2 + 4x$"
    },
    {
        id: "ma061",
        questionText: "Find $\\frac{\\partial f}{\\partial y}$ if $f(x, y) = 2x^2y^3 - 3xy^2 + 2x^2 + 3y^2 + 1$:",
        options: [
            "$6x^2y^3 - 3xy^2 + 4x^2 + 3y^2$",
            "$4xy^3 - 3y^2 + 4x + 3y^2$",
            "$6x^2y^2 - 6xy + 6y$",
            "$0$"
        ],
        correctAnswerIndex: 2,
        explanation: "Taking partial derivative with respect to $y$: $\\frac{\\partial}{\\partial y}(2x^2y^3 - 3xy^2 + 2x^2 + 3y^2 + 1) = 6x^2y^2 - 6xy + 6y$"
    },
    {
        id: "ma062",
        questionText: "Find $f_x$ if $f(x, y) = x \\cos(xy^2)$:",
        options: [
            "$6x \\cos(xy^2)\\sin x$",
            "$4x \\cos(xy^2)$",
            "$2x \\cos(xy^2)$",
            "$-xy^2\\sin(xy^2) + \\cos(xy^2)$"
        ],
        correctAnswerIndex: 3,
        explanation: "Using product rule: $f_x = \\cos(xy^2) + x \\cdot (-\\sin(xy^2)) \\cdot y^2 = \\cos(xy^2) - xy^2\\sin(xy^2)$"
    },
    {
        id: "ma063",
        questionText: "Find $f_y$ if $f(x, y) = x \\cos(xy^2)$:",
        options: [
            "$-2x^2y\\sin(xy^2)$",
            "$2x^2\\sin(xy^2)$",
            "$2x^2y\\sin(xy^2)$",
            "$0$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using chain rule: $f_y = x \\cdot (-\\sin(xy^2)) \\cdot 2xy = -2x^2y\\sin(xy^2)$"
    },
    {
        id: "ma064",
        questionText: "The directional derivative of $f(x, y) = e^x \\cos(2y)$ at the point $(0, \\frac{\\pi}{4})$ in the direction of $\\mathbf{v} = 2\\mathbf{i} + 3\\mathbf{j}$ is:",
        options: [
            "$-\\frac{6\\sqrt{13}}{13}$",
            "$1$",
            "$0$",
            "$\\frac{6\\sqrt{13}}{13}$"
        ],
        correctAnswerIndex: 0,
        explanation: "$\\nabla f = e^x\\cos(2y)\\mathbf{i} - 2e^x\\sin(2y)\\mathbf{j}$. At $(0,\\frac{\\pi}{4})$: $\\nabla f = 0\\mathbf{i} - 2\\mathbf{j}$. Unit vector: $\\mathbf{u} = \\frac{2\\mathbf{i} + 3\\mathbf{j}}{\\sqrt{13}}$. $D_u f = \\nabla f \\cdot \\mathbf{u} = -\\frac{6}{\\sqrt{13}} = -\\frac{6\\sqrt{13}}{13}$"
    },
    {
        id: "ma065",
        questionText: "Let $f(x, y) = x^2 - 2xy$. Find the gradient of $f$ at the point $(1, -2)$:",
        options: [
            "$\\nabla f(1, -2) = 3\\mathbf{i} - 2\\mathbf{j}$",
            "$\\nabla f(1, -2) = -3\\mathbf{i} - 2\\mathbf{j}$",
            "$\\nabla f(1, -2) = 6\\mathbf{i} - 2\\mathbf{j}$",
            "$\\nabla f(1, -2) = -6\\mathbf{i} - 2\\mathbf{j}$"
        ],
        correctAnswerIndex: 2,
        explanation: "$\\nabla f = (2x - 2y)\\mathbf{i} + (-2x)\\mathbf{j}$. At $(1,-2)$: $\\nabla f(1,-2) = (2 + 4)\\mathbf{i} + (-2)\\mathbf{j} = 6\\mathbf{i} - 2\\mathbf{j}$"
    },
    {
        id: "ma066",
        questionText: "If $\\nabla f(x, y) = \\mathbf{0}$, then $D_u f(x, y)$ for every unit vector $\\mathbf{u}$ is:",
        options: [
            "$= 0$",
            "$> 0$",
            "$< 0$",
            "$= 1$"
        ],
        correctAnswerIndex: 0,
        explanation: "The directional derivative $D_u f = \\nabla f \\cdot \\mathbf{u}$. If $\\nabla f = \\mathbf{0}$, then $D_u f = \\mathbf{0} \\cdot \\mathbf{u} = 0$"
    },
    {
        id: "ma067",
        questionText: "The maximum value of $D_u f(x, y)$ is:",
        options: [
            "$\\nabla f(x, y)$",
            "$|\\Delta f(x, y)|$",
            "$-|\\nabla f(x, y)|$",
            "$|\\nabla f(x, y)|$"
        ],
        correctAnswerIndex: 3,
        explanation: "The maximum directional derivative occurs in the direction of the gradient and equals the magnitude of the gradient vector."
    },
    {
        id: "ma068",
        questionText: "Let $(a, b)$ be a critical point of $f$. If $f$ has a relative extremum at $(a, b)$, then $(a, b)$ must be:",
        options: [
            "interior point",
            "midpoint",
            "saddle point",
            "critical point"
        ],
        correctAnswerIndex: 3,
        explanation: "By Fermat's theorem for multivariable functions, any relative extremum must occur at a critical point."
    },
    {
        id: "ma069",
        questionText: "Let $f$ be continuous on a polar rectangle $R = \\{(r, \\theta) | a \\leq r \\leq b, \\alpha \\leq \\theta \\leq \\beta\\}$. Then $\\iint_R f(x, y)dA$ equals:",
        options: [
            "$\\int_\\alpha^\\beta \\int_a^b f(\\cos\\theta, \\sin\\theta)r \\, dr \\, d\\theta$",
            "$\\int_\\alpha^\\beta \\int_a^b f(r\\cos\\theta, r\\sin\\theta) \\, dr \\, d\\theta$",
            "$\\int_\\alpha^\\beta \\int_a^b f(r\\cos\\theta, r\\sin\\theta)r \\, dr \\, d\\theta$",
            "$-\\int_\\alpha^\\beta \\int_a^b f(r\\cos\\theta, r\\sin\\theta)r \\, dr \\, d\\theta$"
        ],
        correctAnswerIndex: 2,
        explanation: "In polar coordinates, $dA = r \\, dr \\, d\\theta$ and $(x,y) = (r\\cos\\theta, r\\sin\\theta)$"
    },
    {
        id: "ma070",
        questionText: "For second derivative test, if $D(a,b) > 0$ and $f_{xx}(a,b) > 0$, then $f(a,b)$ is a:",
        options: [
            "relative minimum value",
            "saddle point", 
            "relative maximum value",
            "None of these"
        ],
        correctAnswerIndex: 0,
        explanation: "When $D = f_{xx}f_{yy} - (f_{xy})^2 > 0$ and $f_{xx} > 0$, the critical point is a relative minimum."
    }
];