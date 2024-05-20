def add_integer(a, b=98):
    """
    Adds two integers.

    Args:
        a (int or float): First number.
        b (int or float, optional): Second number (default is 98).

    Returns:
        int: Sum of a and b (casted to integers if necessary).

    Raises:
        TypeError: If a or b is not an integer or float.
    """
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("a must be an integer or b must be an integer")

    return int(a) + int(b)

# Example usage:
result = add_integer(5, 3.5)
print(f"Result: {result}")  # Output: Result: 8

