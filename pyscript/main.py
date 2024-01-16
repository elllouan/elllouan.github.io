import pyscript as ps
import numpy as np
import matplotlib.pyplot as plt

# Create a new HTML page
page = ps.HTMLPage()

# Create a div element to hold the graph
graph_div = ps.HTMLDiv()

# Add the div element to the page
page.add_element(graph_div)

# Generate some sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create a figure and plot the data
fig, ax = plt.subplots()
ax.plot(x, y)

# Save the figure as an image
image_path = "graph.png"
fig.savefig(image_path)

# Create an HTML image element and set its source to the saved image
graph_image = ps.HTMLImage(src=image_path)

# Add the image element to the div
graph_div.add_element(graph_image)

# Save the HTML page
page.save("graph.html")
